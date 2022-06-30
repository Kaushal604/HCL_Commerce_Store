/* tslint:disable */
/* eslint-disable */
/**
 * HCL Commerce Transaction server Services 
 * These services provide APIs to interact with transaction
 *
 * The version of the OpenAPI document: 9.1.6
 * 
 * (C) Copyright HCL Technologies Limited 2021
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ComIbmCommerceCatalogFacadeDatatypesAssociationType } from './com-ibm-commerce-catalog-facade-datatypes-association-type';
import { ComIbmCommerceCatalogFacadeDatatypesCatalogEntryFulfillmentPropertiesType } from './com-ibm-commerce-catalog-facade-datatypes-catalog-entry-fulfillment-properties-type';
import { ComIbmCommerceCatalogFacadeDatatypesKitComponentType } from './com-ibm-commerce-catalog-facade-datatypes-kit-component-type';
import { ComIbmCommerceFoundationCommonDatatypesAttachmentReferenceType } from './com-ibm-commerce-foundation-common-datatypes-attachment-reference-type';
import { ComIbmCommerceFoundationCommonDatatypesCatalogGroupIdentifierType } from './com-ibm-commerce-foundation-common-datatypes-catalog-group-identifier-type';
import { ComIbmCommerceFoundationCommonDatatypesOfferPriceType } from './com-ibm-commerce-foundation-common-datatypes-offer-price-type';
import { ComIbmCommerceFoundationCommonDatatypesSEOPropertiesType } from './com-ibm-commerce-foundation-common-datatypes-seoproperties-type';
import { ComIbmCommerceFoundationCommonDatatypesSEOURLType } from './com-ibm-commerce-foundation-common-datatypes-seourltype';
import { EspotCatalogEntryAttributes } from './espot-catalog-entry-attributes';
import { EspotCatalogEntryDescription } from './espot-catalog-entry-description';
import { EspotCatalogEntryIdentifier } from './espot-catalog-entry-identifier';
import { EspotCatalogEntryUserDataField } from './espot-catalog-entry-user-data-field';
import { EspotContractPrice } from './espot-contract-price';
import { EspotListPrice } from './espot-list-price';
import { EspotStandardPrice } from './espot-standard-price';

/**
 * 
 * @export
 * @interface EspotCatalogEntry
 */
export interface EspotCatalogEntry {
    /**
     * 
     * @type {EspotCatalogEntryIdentifier}
     * @memberof EspotCatalogEntry
     */
    catalogEntryIdentifier?: EspotCatalogEntryIdentifier;
    /**
     * 
     * @type {EspotStandardPrice}
     * @memberof EspotCatalogEntry
     */
    standardPrice?: EspotStandardPrice;
    /**
     * 
     * @type {Array<EspotCatalogEntryDescription>}
     * @memberof EspotCatalogEntry
     */
    description?: Array<EspotCatalogEntryDescription>;
    /**
     * 
     * @type {Array<object>}
     * @memberof EspotCatalogEntry
     */
    navigationRelationship?: Array<object>;
    /**
     * 
     * @type {Array<EspotContractPrice>}
     * @memberof EspotCatalogEntry
     */
    contractPrice?: Array<EspotContractPrice>;
    /**
     * 
     * @type {number}
     * @memberof EspotCatalogEntry
     */
    displaySequence?: number;
    /**
     * 
     * @type {ComIbmCommerceFoundationCommonDatatypesCatalogGroupIdentifierType}
     * @memberof EspotCatalogEntry
     */
    parentCatalogGroupIdentifier?: ComIbmCommerceFoundationCommonDatatypesCatalogGroupIdentifierType;
    /**
     * 
     * @type {Array<ComIbmCommerceCatalogFacadeDatatypesKitComponentType>}
     * @memberof EspotCatalogEntry
     */
    kitComponent?: Array<ComIbmCommerceCatalogFacadeDatatypesKitComponentType>;
    /**
     * 
     * @type {Array<ComIbmCommerceFoundationCommonDatatypesSEOURLType>}
     * @memberof EspotCatalogEntry
     */
    sEOURL?: Array<ComIbmCommerceFoundationCommonDatatypesSEOURLType>;
    /**
     * 
     * @type {EspotListPrice}
     * @memberof EspotCatalogEntry
     */
    listPrice?: EspotListPrice;
    /**
     * 
     * @type {Array<ComIbmCommerceFoundationCommonDatatypesSEOPropertiesType>}
     * @memberof EspotCatalogEntry
     */
    sEOProperties?: Array<ComIbmCommerceFoundationCommonDatatypesSEOPropertiesType>;
    /**
     * 
     * @type {Array<ComIbmCommerceFoundationCommonDatatypesAttachmentReferenceType>}
     * @memberof EspotCatalogEntry
     */
    attachmentReference?: Array<ComIbmCommerceFoundationCommonDatatypesAttachmentReferenceType>;
    /**
     * 
     * @type {ComIbmCommerceFoundationCommonDatatypesOfferPriceType}
     * @memberof EspotCatalogEntry
     */
    floorPrice?: ComIbmCommerceFoundationCommonDatatypesOfferPriceType;
    /**
     * 
     * @type {ComIbmCommerceCatalogFacadeDatatypesCatalogEntryFulfillmentPropertiesType}
     * @memberof EspotCatalogEntry
     */
    fulfillmentProperties?: ComIbmCommerceCatalogFacadeDatatypesCatalogEntryFulfillmentPropertiesType;
    /**
     * 
     * @type {Array<EspotCatalogEntryAttributes>}
     * @memberof EspotCatalogEntry
     */
    attributes?: Array<EspotCatalogEntryAttributes>;
    /**
     * 
     * @type {Array<EspotCatalogEntryUserDataField>}
     * @memberof EspotCatalogEntry
     */
    userDataField?: Array<EspotCatalogEntryUserDataField>;
    /**
     * 
     * @type {string}
     * @memberof EspotCatalogEntry
     */
    catalogEntryTypeCode?: string;
    /**
     * 
     * @type {Array<ComIbmCommerceCatalogFacadeDatatypesAssociationType>}
     * @memberof EspotCatalogEntry
     */
    association?: Array<ComIbmCommerceCatalogFacadeDatatypesAssociationType>;
    /**
     * 
     * @type {string}
     * @memberof EspotCatalogEntry
     */
    navigationPath?: string;
}

