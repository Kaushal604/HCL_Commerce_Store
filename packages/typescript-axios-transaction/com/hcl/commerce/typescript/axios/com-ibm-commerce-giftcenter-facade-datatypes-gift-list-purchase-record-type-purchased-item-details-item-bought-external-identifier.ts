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

import { ComIbmCommerceGiftcenterFacadeDatatypesGiftListPurchaseRecordTypePurchasedItemDetailsItemBoughtExternalIdentifierStoreIdentifier } from './com-ibm-commerce-giftcenter-facade-datatypes-gift-list-purchase-record-type-purchased-item-details-item-bought-external-identifier-store-identifier';

/**
 * 
 * @export
 * @interface ComIbmCommerceGiftcenterFacadeDatatypesGiftListPurchaseRecordTypePurchasedItemDetailsItemBoughtExternalIdentifier
 */
export interface ComIbmCommerceGiftcenterFacadeDatatypesGiftListPurchaseRecordTypePurchasedItemDetailsItemBoughtExternalIdentifier {
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceGiftcenterFacadeDatatypesGiftListPurchaseRecordTypePurchasedItemDetailsItemBoughtExternalIdentifier
     */
    ownerID?: string;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceGiftcenterFacadeDatatypesGiftListPurchaseRecordTypePurchasedItemDetailsItemBoughtExternalIdentifier
     */
    partNumber: string;
    /**
     * 
     * @type {ComIbmCommerceGiftcenterFacadeDatatypesGiftListPurchaseRecordTypePurchasedItemDetailsItemBoughtExternalIdentifierStoreIdentifier}
     * @memberof ComIbmCommerceGiftcenterFacadeDatatypesGiftListPurchaseRecordTypePurchasedItemDetailsItemBoughtExternalIdentifier
     */
    storeIdentifier?: ComIbmCommerceGiftcenterFacadeDatatypesGiftListPurchaseRecordTypePurchasedItemDetailsItemBoughtExternalIdentifierStoreIdentifier;
}


