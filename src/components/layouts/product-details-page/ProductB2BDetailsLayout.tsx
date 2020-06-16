/*
 *==================================================
 * Licensed Materials - Property of HCL Technologies
 *
 * HCL Commerce
 *
 * (C) Copyright HCL Technologies Limited 2020
 *
 *==================================================
 */
//Standard libraries
import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import Axios, { Canceler } from "axios";
import Hidden from "@material-ui/core/Hidden";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

//Foundation libraries
import associatedPromotionCodeService from "../../../_foundation/apis/transaction/associatedPromotionCode.service";
import inventoryavailabilityService from "../../../_foundation/apis/transaction/inventoryavailability.service";
import productsService from "../../../_foundation/apis/search/products.service";
//Custom libraries
import { OFFER, DISPLAY } from "../../../constants/common";
import { SIGNIN } from "../../../constants/routes";
import FormattedPriceDisplay from "../../widgets/formatted-price-display";
import ProductB2BImage from "./ProductB2BImage";
import ProductB2BAttributes from "./ProductB2BAttributes";
//Redux
import { currentContractIdSelector } from "../../../redux/selectors/contract";
import { loginStatusSelector } from "../../../redux/selectors/user";
import * as orderActions from "../../../redux/actions/order";
import * as errorActions from "../../../redux/actions/error";
//UI
import {
  StyledGrid,
  StyledTypography,
  StyledButton,
  StyledTextField,
  StyledProductImage,
  StyledPDPContainer,
  StyledTable,
  StyledTableIcons,
  StyledSidebar,
  StyledTabs,
  ITabs,
} from "../../StyledUI";

const StyledB2BDetailPanel = styled.div`
  ${({ theme }) => `
  color: white;
  background: ${theme.palette.grey[100]};
  padding: ${theme.spacing(2)}px;

  .MuiPaper-root.MuiPaper-rounded {
    box-shadow: none;
    background: transparent;
    padding: 0;
  }
  `}
`;

/**
 * B2B Product display component
 * Displays product defining atrributes, SKUs and it's availability, promotions and other product details.
 * Allows user to choose the product and add it to shopping cart.
 *
 * @param productPartNumber
 * @param productLayout
 * @param pdpData
 * @param storeId
 */
function ProductB2BDetailsLayout({
  productPartNumber,
  productLayout,
  pdpData,
  storeId,
}: any) {
  let cancels: Canceler[] = [];
  const CancelToken = Axios.CancelToken;
  const { t } = useTranslation();
  const contract = useSelector(currentContractIdSelector);
  const loginStatus = useSelector(loginStatusSelector);
  const dispatch = useDispatch();
  let uniqueSkus: any[] = [];
  let inventoryMap = new Map();
  let currentSelection: any = {
    sku: { fullImage: "" },
    quantity: "1",
    isAngleImage: false,
    selectedAttributes: {},
    availability: null,
  };
  let productInfoData: any = {
    price: [{}],
    availableAttributes: [{ values: [{}] }],
    fullImage: "",
  };

  let productInfo: any;
  let descAttributes: any[] = [];
  let definingAttributes: any[] = [];
  let defnAttrSrc: any[] = [];
  let availAttrs: Set<string> = new Set<string>();
  let tableBody: any[] = [];
  let tableHeader: any[] = [];
  let tableDetailHeader: any[] = [];
  let productType: string = "";
  let invalidSKU: boolean;
  let addToCartMap = new Map();
  let availSkus: Set<any> = new Set<any>();
  let filteredSkus: Set<any> = new Set<any>();
  let attributeChangeMap = new Map();
  const [product, setProduct] = React.useState<any>(null);
  const [currentProdSelect, setCurrentProdSelect] = React.useState<any>(null);
  const [productOfferPrice, setProductOfferPrice] = React.useState<number>(0);
  const [prodDisplayPrice, setProdDisplayPrice] = React.useState<number>(0);
  const [descAttributeList, setDescAttributeList] = React.useState<
    Array<object>
  >([]);
  const [definingAttributeList, setDefiningAttributeList] = React.useState<
    Array<object>
  >([]);
  const [productData, setProductData] = React.useState<any>(null);
  const [promotion, setPromotion] = React.useState<Array<any>>([]);
  const [tableBodyData, setTableBodyData] = React.useState<Array<any>>([]);
  const [tableHeaderData, setTableHeaderData] = React.useState<Array<any>>([]);
  const [tableDetailHeaderData, setTableDetailHeaderData] = React.useState<
    Array<any>
  >([]);
  const [disabledButtonFlag, setDisabledButtonFlag] = React.useState<boolean>(
    false
  );
  const [addToCartErrorMsg, setAddToCartErrorMsg] = React.useState<string>("");
  const [skuAndQuantities, setSkuAndQuantities] = React.useState<Map<any, any>>(
    addToCartMap
  );
  const [uniqueSkuList, setUniqueSkuList] = React.useState<Array<any>>([]);
  const [skuInventory, setSkuInventory] = React.useState<Map<any, any>>(
    () => new Map()
  );
  const [attributeState, setAttributeState] = React.useState<Map<any, any>>(
    attributeChangeMap
  );
  const [filterSkuState, setFilterSkuState] = React.useState<Array<any>>([]);

  /**
   * Get product information based on its type
   */
  const getProduct = () => {
    productType = "";
    productInfo = pdpData[0];
    let product: any = {
      name: productInfo.name,
      shortDescription: productInfo.shortDescription,
      longDescription: productInfo.longDescription,
    };
    if (productInfo.type === "product" || productInfo.type === "variant") {
      productType = productInfo.type;
      initializeProduct(productInfo);
    } else if (
      productInfo.type === "item" &&
      productInfo.parentCatalogEntryID
    ) {
      productType = productInfo.type;
      let productsId: string[] = [];
      productsId.push(productInfo.parentCatalogEntryID);
      let parameters: any = {
        storeId: storeId,
        id: productsId,
        contractId: contract,
        cancelToken: new CancelToken(function executor(c) {
          cancels.push(c);
        }),
      };
      productsService
        .findProductsUsingGET(parameters)
        .then((res) => {
          if (res.data.contents && res.data.contents.length > 0) {
            initializeProduct(res.data.contents[0], productInfo.attributes);
          }
        })
        .catch((e) => {
          console.log("could not retreive the parent product details", e);
        });
    }
    setProduct(product);
  };

  /**
   * Get associated promotions for the product
   */
  const getAssociatedPromotions = () => {
    let promotion: any[] = [];
    let parameters: any = {
      storeId: storeId,
      q: "byProduct",
      qProductId: pdpData[0].id,
      cancelToken: new CancelToken(function executor(c) {
        cancels.push(c);
      }),
    };
    associatedPromotionCodeService
      .findPromotionsByProduct(parameters)
      .then((res) => {
        if (res.data.associatedPromotions) {
          for (let promo of res.data.associatedPromotions) {
            if (promo.description)
              promotion = promo.description.shortDescription;
          }
          setPromotion(promotion);
        }
      })
      .catch((e) => {
        console.log(
          "Could not retrieve product associated promotion details",
          e
        );
      });
  };

  /**
   * Get product details based upon the available attributes
   * @param productInfo
   * @param attr
   */
  const initializeProduct = (productInfo: any, attr?: any) => {
    if (productInfo) {
      productInfoData = JSON.parse(JSON.stringify(productInfo));
      descAttributes = [];
      definingAttributes = [];
      defnAttrSrc = [];
      availAttrs.clear();
      if (productInfo.attributes) {
        productInfoData.availableAttributes = JSON.parse(
          JSON.stringify(productInfo.attributes)
        );
        getDescriptiveAndDefiningAttributes();
      }
      if (productInfoData.items && productInfoData.items.length > 0) {
        currentSelection.partNumber = productInfoData.items[0];
        if (currentSelection.partNumber.attributes)
          initializeSelectedAttributes(attr);
      } else {
        currentSelection.partNumber = productInfoData;
        currentSelection.selectedAttributes = {};
        if (currentSelection.partNumber.attributes) {
          for (const att of currentSelection.partNumber.attributes) {
            if (att.values.length) {
              currentSelection.selectedAttributes[att.identifier] =
                att.values[0].identifier;
            }
          }
        }
      }
    }
    setProductPrice(currentSelection.partNumber.price);
    setDefiningAttributeList(definingAttributes);
    setDescAttributeList(descAttributes);
    setProductData(productInfoData);
    getUniqueSkusAndInventory(productInfoData.items);
  };

  /**
   * Validate SKU based upon the selected attributes
   * @param attr
   */
  const initializeSelectedAttributes = (attr?: any) => {
    currentSelection.selectedAttributes = {};
    if (attr) {
      for (const att of attr) {
        currentSelection.selectedAttributes[att.identifier] =
          att.values[0].identifier;
      }
    } else {
      for (const att of currentSelection.partNumber.attributes) {
        currentSelection.selectedAttributes[att.identifier] =
          att.values[0].identifier;
      }
    }
    const sku = resolveSKU(
      productInfoData.items,
      currentSelection.selectedAttributes
    );
    if (sku === "") {
      invalidSKU = true;
    } else {
      invalidSKU = false;
      currentSelection.partNumber = sku;
    }
    setCurrentProdSelect(currentSelection);
    setDisabledButtonFlag(invalidSKU);
  };

  /**
   *Get the SKU details from product SKUs and selected attributes
   *@param skus
   *@param selectedAttributes
   */
  const resolveSKU = (skus: any, selectedAttributes: any): any => {
    if (skus) {
      for (const s of skus) {
        if (s.attributes) {
          const values = s.attributes.reduce((value: any, a: any) => {
            value[a.identifier] = a.values[0].identifier;
            return value;
          }, {});
          let match = true;
          for (const key in selectedAttributes) {
            match = match && selectedAttributes[key] === values[key];
          }
          if (match) {
            return s;
          }
        }
      }
    }
    /* istanbul ignore next */
    return "";
  };

  /**
   *Get the descriptive and defining attributes
   */
  const getDescriptiveAndDefiningAttributes = () => {
    for (const att of productInfoData.availableAttributes) {
      if (
        att.usage === "Descriptive" &&
        att.displayable &&
        att.identifier !== "PickUpInStore" &&
        !att.identifier.startsWith("ribbonad")
      ) {
        descAttributes.push(att);
      } else if (att.usage === "Defining") {
        definingAttributes.push(att);
        defnAttrSrc.push(att);
      }
    }
    if (productInfoData.items) {
      availableAttributes(productInfoData.items);
    }
  };

  /**
   * Helper method to get unique available attributes and store it in set
   * @param skus
   */
  const availableAttributes = (skus: any[]): void => {
    let c: any;
    let u: string[];
    for (const s of skus) {
      c = attrs2Object(s.attributes);
      u = [];
      for (let d of definingAttributes) {
        u.push(c[d.identifier]);
      }
      availAttrs.add(u.join("|"));
    }
  };

  /**
   * Helper method to prepare and set the product data to display in Drawer expansion table
   *
   * @param skus
   * @param inventory
   * @param defAttributeList
   */
  const setTableData = (
    skus: any[],
    inventory: Map<any, any>,
    defAttributeList: any[]
  ) => {
    let tablebodyDataMap = new Map();
    let tableHeaderDataMap = new Map();
    let tableDetailHeaderDataMap = new Map();
    let attributeSize = defAttributeList.length;
    if (attributeSize > 3) {
      attributeSize = 3;
    }
    for (const s of skus) {
      tablebodyDataMap.set("sku", s.partNumber);
      for (const a of s.attributes) {
        tablebodyDataMap.set(a.name, a.values[0].value);
      }
      let offerPrice: number = 0;
      let displayPrice: number = 0;
      let priceDisplaytag: any;
      for (const p of s.price) {
        if (p.usage === DISPLAY && p.value !== "") {
          displayPrice = parseFloat(p.value);
        } else if (p.usage === OFFER && p.value !== "") {
          offerPrice = parseFloat(p.value);
        }
      }

      if (offerPrice > 0) {
        priceDisplaytag = <FormattedPriceDisplay min={offerPrice} />;
      } else if (offerPrice === 0 && displayPrice > 0) {
        priceDisplaytag = <FormattedPriceDisplay min={displayPrice} />;
      } else if (offerPrice === 0 && displayPrice === 0) {
        priceDisplaytag = <FormattedPriceDisplay min={null} />;
      }
      tablebodyDataMap.set("price", priceDisplaytag);

      if (inventory.get(s.id)) {
        let availableQuantityTag = (
          <StyledTextField
            type="number"
            id={`${s.partNumber}`}
            pattern="/d*"
            disabled={!loginStatus}
            InputProps={{
              inputProps: {
                min: 1,
              },
            }}
            value={
              skuAndQuantities.get(s.partNumber)
                ? skuAndQuantities.get(s.partNumber)
                : ""
            }
            onChange={(e: any) => updateProductQuantity(e)}
          />
        );
        let availableImage = (
          <div>
            <span>
              <StyledProductImage
                itemProp="image"
                src="\SapphireSAS\images\Available.gif"
              />
            </span>
            <span> {t("productDetail.InStock")}</span>
          </div>
        );
        tablebodyDataMap.set("online_availability", availableImage);
        tablebodyDataMap.set("quantity", availableQuantityTag);
      } else {
        let unAvailableQuantityTag = (
          <StyledTextField
            type="number"
            id={`${s.partNumber}`}
            pattern="/d*"
            disabled
            value={
              skuAndQuantities.get(s.partNumber)
                ? skuAndQuantities.get(s.partNumber)
                : ""
            }
          />
        );
        let unAvailableImage = (
          <div>
            <span>
              <StyledProductImage
                itemProp="image"
                src="\SapphireSAS\images\Unavailable.gif"
              />
            </span>
            <span> {t("productDetail.OutofStock")}</span>
          </div>
        );
        tablebodyDataMap.set("online_availability", unAvailableImage);
        tablebodyDataMap.set("quantity", unAvailableQuantityTag);
      }

      tableBody.push(mapToObj(tablebodyDataMap));
      tablebodyDataMap = new Map();
    }
    tableHeaderDataMap.set("title", t("productDetail.SKU"));
    tableHeaderDataMap.set("field", "sku");
    tableHeader.push(mapToObj(tableHeaderDataMap));
    tableHeaderDataMap = new Map();
    for (let i = 0; i < attributeSize; i++) {
      tableHeaderDataMap.set("title", defAttributeList[i].name);
      tableHeaderDataMap.set("field", defAttributeList[i].name);
      tableHeader.push(mapToObj(tableHeaderDataMap));
      tableHeaderDataMap = new Map();
    }
    for (let j = attributeSize; j < defAttributeList.length; j++) {
      tableDetailHeaderDataMap.set("title", defAttributeList[j].name);
      tableDetailHeaderDataMap.set("field", defAttributeList[j].name);
      tableDetailHeader.push(mapToObj(tableDetailHeaderDataMap));
      tableDetailHeaderDataMap = new Map();
    }
    tableHeaderDataMap.set("title", t("productDetail.Price"));
    tableHeaderDataMap.set("field", "price");
    tableHeader.push(mapToObj(tableHeaderDataMap));
    tableHeaderDataMap = new Map();
    tableHeaderDataMap.set("title", t("productDetail.Quantity"));
    tableHeaderDataMap.set("field", "quantity");
    tableHeader.push(mapToObj(tableHeaderDataMap));
    tableHeaderDataMap = new Map();
    tableHeaderDataMap.set("title", t("productDetail.Online_Availability"));
    tableHeaderDataMap.set("field", "online_availability");
    tableHeader.push(mapToObj(tableHeaderDataMap));
    setTableBodyData(tableBody);
    setTableHeaderData(tableHeader);
    setTableDetailHeaderData(tableDetailHeader);
  };

  /**
   *Helper method to convert a map to an object
   * @param inputMap
   * @returns object
   */

  function mapToObj(inputMap: any[] | Map<any, any>) {
    let obj = {};
    inputMap.forEach(function (value: any, key: React.ReactText) {
      obj[key] = value;
    });
    return obj;
  }

  /**
   *Helper method to convert attributes to object
   * @param attrs
   * @return object
   */
  const attrs2Object = (attrs: any[]): any => {
    if (attrs === undefined) {
      return {};
    }
    return attrs.reduce((obj: any, attr: any) => {
      obj[attr.identifier] = attr.values[0].identifier;
      return obj;
    }, {});
  };

  /**
   *Helper method to convert attributes to object
   * @param attrs
   * @returns object
   */
  const sku2Object = (skus: any[], sku: string): any => {
    if (skus === undefined) {
      return {};
    }
    for (let d of skus) {
      if (d.partNumber === sku) return d;
    }
  };

  /**
   * Defining attribute change event handler
   * @param attr
   * @param e
   */
  const onAttributeChange = (attr: string, e: string) => {
    if (e !== t("productDetail.any")) {
      attributeChangeMap.set(attr, e);
      setAttributeState(new Map(attributeState.set(attr, e)));
      filterUniqueSkus();
      updateCurrentSelection();
    } else {
      attributeChangeMap = attributeState;
      attributeChangeMap.delete(attr);
      setAttributeState(new Map(attributeChangeMap));
      if (attributeChangeMap.size === 0) {
        setFilterSkuState([...uniqueSkuList]);
        currentSelection = { ...currentProdSelect };
        currentSelection.partNumber = uniqueSkuList[0];
        setCurrentProdSelect(currentSelection);
        setProductPrice(currentSelection.partNumber.price);
      } else {
        filterUniqueSkus();
        updateCurrentSelection();
      }
    }
  };

  /**
   * Update the current selected product and its price
   * based on selected defining attributes
   */
  const updateCurrentSelection = () => {
    currentSelection = { ...currentProdSelect };
    const sku = resolveSKU(uniqueSkuList, mapToObj(attributeState));
    if (sku !== "") {
      currentSelection.partNumber = sku;
    }
    setCurrentProdSelect(currentSelection);
    setProductPrice(currentSelection.partNumber.price);
  };

  /**
   * filter skulist based on the attribut selected
   */
  const filterUniqueSkus = () => {
    filteredSkus = new Set<any>();
    for (const s of uniqueSkuList) {
      const values = s.attributes.reduce((value: any, a: any) => {
        value[a.identifier] = a.values[0].identifier;
        return value;
      }, {});
      let match = true;
      for (const [key, value] of attributeState.entries()) {
        match = match && attributeState.get(key) === values[key];
      }
      if (match) {
        filteredSkus.add(s);
      }
    }
    let uniqueFilteredArray = Array.from(filteredSkus);
    uniqueFilteredArray = uniqueFilteredArray.sort(compare);
    setFilterSkuState(uniqueFilteredArray);
  };

  /**
   * Set the product offer price and display price
   * @param priceArray
   */
  const setProductPrice = (priceArray: any[]) => {
    if (priceArray) {
      for (const price of priceArray) {
        if (price.usage === OFFER && price.value !== "") {
          setProductOfferPrice(parseFloat(price.value));
        } else if (price.usage === DISPLAY && price.value !== "") {
          setProdDisplayPrice(parseFloat(price.value));
        }
      }
    }
  };

  /**
   * Product quantity input field value change event handler
   * @param e
   */
  const updateProductQuantity = (e: any) => {
    if (/^[1-9]+[0-9]*$/.test(e.target.value)) {
      setSkuAndQuantities(
        new Map(skuAndQuantities.set(e.target.id, e.target.value))
      );
    } else {
      addToCartMap = skuAndQuantities;
      addToCartMap.delete(e.target.id);
      setSkuAndQuantities(new Map(addToCartMap));
      e.target.value = "";
    }
  };

  /**
   *Add the selected product and its quantities to the shopping cart
   */
  const addToCart = () => {
    if (skuAndQuantities && skuAndQuantities.size > 0) {
      const param = {
        partnumber: Array.from(skuAndQuantities.keys()),
        quantity: Array.from(skuAndQuantities.values()),
        contractId: contract,
        cancelToken: new CancelToken(function executor(c) {
          cancels.push(c);
        }),
      };
      dispatch(orderActions.ADD_ITEM_ACTION(param));
    } else {
      let parameters: any = {
        errorMessage: t("productDetail.addToCartErrorMsg"),
      };
      dispatch(errorActions.VALIDATION_ERROR_ACTION(parameters));
    }
  };

  /**
   * Get the unique SKUs & its inventory details.
   * Unique Skus is sorted in ascending order based on partNumber.
   * Store the details in uniqueSkus array and inventoryMap respectively.
   * @param skus
   */
  const getUniqueSkusAndInventory = (skus: any[]): void => {
    let productId: string[] = [];
    if (skus) {
      for (const s of skus) {
        availSkus.add(sku2Object(skus, s.partNumber));
      }
      let uniqueSkuList = Array.from(availSkus);
      uniqueSkuList = uniqueSkuList.sort(compare);
      uniqueSkus = uniqueSkuList;
      setUniqueSkuList(uniqueSkus);
      for (const s of uniqueSkuList) {
        productId.push(s.id);
      }
      getSkuInventory(productId.join());
    }
  };
  /**
   * Utility method used in sorting.
   * @param a
   * @param b
   */
  const compare = (a, b): any => {
    return a.partNumber.localeCompare(b.partNumber, "en", {
      numeric: true,
    });
  };

  /**
   * Helper method to get the SKU's inventory details.
   * Stores the availabilty data in inventoryMap.
   * @param productId
   */
  const getSkuInventory = (productId: any) => {
    let inventoryStatus: boolean = false;
    let parameters: any = {
      storeId: storeId,
      productIds: productId,
      cancelToken: new CancelToken(function executor(c) {
        cancels.push(c);
      }),
    };
    inventoryavailabilityService
      .getInventoryAvailabilityByProductId(parameters)
      .then((res) => {
        if (
          res.data.InventoryAvailability !== undefined &&
          res.data.InventoryAvailability.length > 0
        ) {
          for (const inventory of res.data.InventoryAvailability) {
            inventoryStatus =
              inventory.inventoryStatus === "Available" ? true : false;
            inventoryMap.set(inventory.productId, inventoryStatus);
          }
        }
        setSkuInventory(inventoryMap);
        setTableData(uniqueSkus, inventoryMap, definingAttributes);
        setFilterSkuState(uniqueSkus);
      })
      .catch((e) => {
        console.log("Could not retrieve Inventory Details", e);
      });
  };

  React.useEffect(() => {
    if (pdpData !== undefined && pdpData !== null && pdpData.length > 0) {
      if (uniqueSkuList.length === 0) {
        getProduct();
        getAssociatedPromotions();
      }
    }
    if (uniqueSkuList.length > 0)
      setTableData(filterSkuState, skuInventory, definingAttributeList);
    return () => {
      cancels.forEach((cancel) => cancel());
    };
  }, [skuAndQuantities, filterSkuState]);

  let productDetailTabsChildren: ITabs[] = [];

  if (product && product.longDescription) {
    const descriptionElement = (
      <>
        <StyledTypography variant="body1">
          {product.longDescription}
        </StyledTypography>
      </>
    );
    productDetailTabsChildren.push({
      title: t("productDetail.Description"),
      tabContent: descriptionElement,
    });
  }

  return (
    <>
      {productPartNumber && currentProdSelect && (
        <StyledGrid container spacing={3}>
          <StyledGrid item xs={12}>
            <StyledPDPContainer
              itemScope
              itemType="http://schema.org/Product"
              id={`product-image-details_${productPartNumber}`}>
              <StyledGrid container spacing={2}>
                <Hidden smUp>
                  <StyledGrid item xs={1}></StyledGrid>
                  <StyledGrid item xs={10} className="product-image">
                    <ProductB2BImage
                      product={currentProdSelect}
                      partNumber={productPartNumber}
                    />
                  </StyledGrid>
                </Hidden>
                <StyledGrid item xs={12} sm={6} md={6} lg={6} xl={5}>
                  {product && (
                    <StyledTypography
                      variant="h4"
                      itemProp="name"
                      className="product-name">
                      {product.name}
                    </StyledTypography>
                  )}
                  {productData !== null && (
                    <StyledTypography variant="body2" className="product-sku">
                      SKU: {productData.partNumber}
                    </StyledTypography>
                  )}
                  {product && (
                    <StyledTypography
                      variant="body1"
                      itemProp="description"
                      className="product-shortDescription">
                      {product.shortDescription}
                    </StyledTypography>
                  )}
                  {
                    <StyledTypography
                      variant="body2"
                      id={`product_advertisement_${productPartNumber}`}
                      className="product-promo"
                      gutterBottom>
                      {promotion}
                    </StyledTypography>
                  }
                  <div
                    itemProp="offers"
                    itemScope
                    itemType="http://schema.org/Offer">
                    {productType !== "bundle" && (
                      <>
                        <StyledTypography
                          variant="h5"
                          className="product-price-container">
                          {productOfferPrice > 0 && (
                            <span className="product-price">
                              <FormattedPriceDisplay min={productOfferPrice} />
                            </span>
                          )}
                          {prodDisplayPrice > 0 && (
                            <span
                              id={`product_price_${productPartNumber}`}
                              className={
                                productOfferPrice > 0 ? "strikethrough" : ""
                              }>
                              <FormattedPriceDisplay min={prodDisplayPrice} />
                            </span>
                          )}
                          {productOfferPrice === 0 &&
                            prodDisplayPrice === 0 && (
                              <span
                                id={`product_offer_price_${productPartNumber}`}>
                                {<FormattedPriceDisplay min={null} />}
                              </span>
                            )}
                        </StyledTypography>
                      </>
                    )}
                  </div>
                  <StyledTabs
                    childrenList={productDetailTabsChildren}
                    name="productDetails"
                  />
                </StyledGrid>
                <Hidden xsDown>
                  <StyledGrid item xs={6} md={5} className="product-image">
                    <ProductB2BImage
                      product={currentProdSelect}
                      partNumber={productPartNumber}
                    />
                  </StyledGrid>
                </Hidden>
              </StyledGrid>
            </StyledPDPContainer>
          </StyledGrid>
          <StyledGrid item xs={12} md={3} className="sidebar">
            {definingAttributeList.length > 0 && (
              <StyledSidebar
                title={t("productDetail.attributeFilter")}
                breakpoint="md"
                sidebarContent={
                  <ProductB2BAttributes
                    attributeList={definingAttributeList}
                    onChangeHandler={onAttributeChange}
                  />
                }
              />
            )}
          </StyledGrid>
          {tableHeaderData.length > 0 && (
            <StyledGrid item xs={12} md={9}>
              <StyledTable
                icons={StyledTableIcons}
                columns={tableHeaderData}
                data={tableBodyData}
                title=""
                detailPanel={
                  tableDetailHeaderData.length > 0
                    ? [
                        {
                          tooltip: t("productDetail.showAttributes"),
                          render: (rowData: any) => {
                            let detailData: any[] = [];
                            let data = {};
                            for (const d of tableDetailHeaderData) {
                              data[d.field] = rowData[d.field];
                            }
                            detailData.push(data);
                            return (
                              <StyledB2BDetailPanel>
                                <StyledTable
                                  columns={tableDetailHeaderData}
                                  data={detailData}
                                  icons={StyledTableIcons}
                                  title=""
                                  options={{
                                    search: false,
                                    minBodyHeight: "0px",
                                    paging: false,
                                    toolbar: false,
                                    padding: "dense",
                                    rowStyle: {
                                      fontSize: "10px",
                                    },
                                    headerStyle: {
                                      paddingBottom: "4px",
                                    },
                                  }}
                                />
                              </StyledB2BDetailPanel>
                            );
                          },
                        },
                      ]
                    : null
                }
                options={{
                  search: false,
                  paging: false,
                  toolbar: false,
                }}
                localization={{
                  body: {
                    emptyDataSourceMessage: t(
                      "productDetail.noproductsToDisplay"
                    ),
                  },
                }}
              />
              <p>
                {tableBodyData.length > 0 &&
                  (loginStatus ? (
                    <StyledButton
                      color="primary"
                      size="small"
                      className="product-add-to-cart"
                      id={`product_add_to_cart_${productPartNumber}`}
                      onClick={addToCart}
                      disabled={disabledButtonFlag}
                      style={{ float: "right" }}>
                      {t("productDetail.addToCurrentOrder")}
                    </StyledButton>
                  ) : (
                    <StyledButton
                      color="primary"
                      size="small"
                      className="product-add-to-cart"
                      component={Link}
                      to={SIGNIN}
                      style={{ float: "right" }}>
                      {t("productDetail.SignIn")}
                    </StyledButton>
                  ))}
              </p>
            </StyledGrid>
          )}
        </StyledGrid>
      )}
    </>
  );
}

ProductB2BDetailsLayout.propTypes = {
  productPartNumber: PropTypes.string.isRequired,
  productLayout: PropTypes.string,
  pdpData: PropTypes.any,
  storeId: PropTypes.string,
};

export default ProductB2BDetailsLayout;