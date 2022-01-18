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
import { call, put } from "redux-saga/effects";
//Foundation libraries
import urlsService from "../../../_foundation/apis/search/urls.service";
import { getSite } from "../../../_foundation/hooks/useSite";
import {
  HOME,
  MANAGED_STATIC_PAGES,
  PAGE_TYPE,
  STATIC_PAGES_TOKEN,
} from "../../../_foundation/constants/common";
//Redux
import { GET_SEO_CONFIG_SUCCESS_ACTION } from "../../actions/seo";
//custom
import * as CategoryLandingPageLayoutJson from "../../../configs/default-layout/category-landing-page.json";
import * as ProductPageLayoutJson from "../../../configs/default-layout/product-page.json";
import * as ProductListingPageLayoutJson from "../../../configs/default-layout/product-listing-page.json";
import * as HomePageLayoutJson from "../../../configs/default-layout/home-page.json";
import * as B2BProductPageLayoutJson from "../../../configs/default-layout/b2b-product-page.json";
import * as NotFound from "../../../configs/default-layout/not-found.json";
import * as NoLayoutContentPageJson from "../../../configs/default-layout/no-layout-content-page.json";
import * as BundlePageLayoutJson from "../../../configs/default-layout/bundle-page.json";
import * as CheckoutPageJson from "../../../configs/default-layout/checkout-page.json";
import * as CartPageJson from "../../../configs/default-layout/cart-page.json";
import * as OrderConfirmationPageJson from "../../../configs/default-layout/order-confirmation-page.json";

import { CART, CHECKOUT, ORDER_CONFIRMATION } from "../../../constants/routes";

const layouts: any = {
  CategoryPage: CategoryLandingPageLayoutJson,
  ProductPage: ProductPageLayoutJson,
  ItemPage: ProductPageLayoutJson,
  VariantPage: ProductPageLayoutJson,
  BundlePage: BundlePageLayoutJson,
  ProductListPage: ProductListingPageLayoutJson,
  HomePage: HomePageLayoutJson,
  NotFound: NotFound,
  ContentPage: NoLayoutContentPageJson,
  CheckOutPage: CheckoutPageJson,
  CartPage: CartPageJson,
  OrderConfirmationPage: OrderConfirmationPageJson,
};

export function* getSEO(action: any) {
  const { identifier } = action.payload;
  let seoconfig: any = {};
  try {
    const response = yield call(urlsService.getV2URLResourcesUsingGET, {
      ...action.payload,
    });
    if (
      !response?.data ||
      !response?.data?.contents ||
      !response?.data?.contents[0]
    ) {
      //always make sure default home page is available.
      if (identifier === HOME) {
        seoconfig = {
          page: {
            type: PAGE_TYPE.HOME_PAGE,
            name: HOME,
            title: HOME,
          },
          tokenExternalValue: PAGE_TYPE.HOME_PAGE,
        };
      } else if (`/${identifier}` === CHECKOUT) {
        seoconfig = {
          page: {
            type: PAGE_TYPE.CHECK_OUT_PAGE,
            name: "checkout",
            title:
              getSite()?.storeCfg.description[0]?.displayName ||
              getSite()?.storeName,
          },
          tokenExternalValue: PAGE_TYPE.CHECK_OUT_PAGE,
        };
      } else if (`/${identifier}` === CART) {
        seoconfig = {
          page: {
            type: PAGE_TYPE.CART_PAGE,
            name: "cart",
            title:
              getSite()?.storeCfg.description[0]?.displayName ||
              getSite()?.storeName,
          },
          tokenExternalValue: PAGE_TYPE.CART_PAGE,
        };
      } else if (`/${identifier}` === ORDER_CONFIRMATION) {
        seoconfig = {
          page: {
            type: PAGE_TYPE.ORDER_CONFIRMATION_PAGE,
            name: "Order confirmation",
            title:
              getSite()?.storeCfg.description[0]?.displayName ||
              getSite()?.storeName,
          },
          tokenExternalValue: PAGE_TYPE.ORDER_CONFIRMATION_PAGE,
        };
      } else {
        seoconfig = {
          page: {
            type: "NotFound",
            title:
              getSite()?.storeCfg.description[0]?.displayName ||
              getSite()?.storeName,
          },
        };
      }
    } else {
      seoconfig = response.data.contents[0];
    }
  } catch (error: any) {
    if (error.isAxiosError && error.response && error.response.status === 404) {
      //always make sure default home page is available.
      if (identifier === HOME) {
        seoconfig = {
          page: {
            type: PAGE_TYPE.HOME_PAGE,
            name: HOME,
            title: HOME,
          },
          tokenExternalValue: PAGE_TYPE.HOME_PAGE,
        };
      } else if (`/${identifier}` === CHECKOUT) {
        seoconfig = {
          page: {
            type: PAGE_TYPE.CHECK_OUT_PAGE,
            name: "checkout",
            title:
              getSite()?.storeCfg.description[0]?.displayName ||
              getSite()?.storeName,
          },
          tokenExternalValue: PAGE_TYPE.CHECK_OUT_PAGE,
        };
      } else if (`/${identifier}` === CART) {
        seoconfig = {
          page: {
            type: PAGE_TYPE.CART_PAGE,
            name: "cart",
            title:
              getSite()?.storeCfg.description[0]?.displayName ||
              getSite()?.storeName,
          },
          tokenExternalValue: PAGE_TYPE.CART_PAGE,
        };
      } else if (`/${identifier}` === ORDER_CONFIRMATION) {
        seoconfig = {
          page: {
            type: PAGE_TYPE.ORDER_CONFIRMATION_PAGE,
            name: "Order confirmation",
            title:
              getSite()?.storeCfg.description[0]?.displayName ||
              getSite()?.storeName,
          },
          tokenExternalValue: PAGE_TYPE.ORDER_CONFIRMATION_PAGE,
        };
      } else {
        seoconfig = {
          page: {
            type: "NotFound",
            title:
              getSite()?.storeCfg.description[0]?.displayName ||
              getSite()?.storeName,
          },
        };
      }
    }
  } finally {
    const pageType = seoconfig.page?.type;
    const tokenName = seoconfig.tokenName ?? "";
    const tokenExternalValue = seoconfig.tokenExternalValue ?? "";
    if (pageType) {
      const isB2B = getSite()?.isB2B;
      if (!seoconfig.layout) {
        if (
          isB2B &&
          (pageType === PAGE_TYPE.PRODUCT_PAGE ||
            pageType === PAGE_TYPE.ITEM_PAGE ||
            pageType === PAGE_TYPE.VARIANT_PAGE)
        ) {
          seoconfig.layout = B2BProductPageLayoutJson.layout;
        } else {
          if (
            tokenName === STATIC_PAGES_TOKEN &&
            MANAGED_STATIC_PAGES.includes(tokenExternalValue)
          ) {
            seoconfig.layout = layouts[tokenExternalValue].default.layout;
          } else {
            seoconfig.layout = layouts[pageType].default.layout;
          }
        }
      }
      yield put(GET_SEO_CONFIG_SUCCESS_ACTION({ identifier, seoconfig }));
    }
  }
}
