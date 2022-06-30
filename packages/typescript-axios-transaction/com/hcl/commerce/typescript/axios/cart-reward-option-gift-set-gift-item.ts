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

import { CartRewardOptionGiftSetGiftItemCatalogEntryIdentifier } from './cart-reward-option-gift-set-gift-item-catalog-entry-identifier';
import { CartRewardOptionGiftSetGiftItemQuantity } from './cart-reward-option-gift-set-gift-item-quantity';

/**
 * 
 * @export
 * @interface CartRewardOptionGiftSetGiftItem
 */
export interface CartRewardOptionGiftSetGiftItem {
    /**
     * 
     * @type {CartRewardOptionGiftSetGiftItemCatalogEntryIdentifier}
     * @memberof CartRewardOptionGiftSetGiftItem
     */
    catalogEntryIdentifier?: CartRewardOptionGiftSetGiftItemCatalogEntryIdentifier;
    /**
     * 
     * @type {CartRewardOptionGiftSetGiftItemQuantity}
     * @memberof CartRewardOptionGiftSetGiftItem
     */
    quantity?: CartRewardOptionGiftSetGiftItemQuantity;
}

