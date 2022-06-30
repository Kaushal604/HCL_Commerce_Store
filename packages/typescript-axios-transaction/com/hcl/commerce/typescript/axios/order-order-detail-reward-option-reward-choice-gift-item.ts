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

import { ComIbmCommerceFoundationCommonDatatypesPartNumberIdentifierType } from './com-ibm-commerce-foundation-common-datatypes-part-number-identifier-type';

/**
 * 
 * @export
 * @interface OrderOrderDetailRewardOptionRewardChoiceGiftItem
 */
export interface OrderOrderDetailRewardOptionRewardChoiceGiftItem {
    /**
     * 
     * @type {number}
     * @memberof OrderOrderDetailRewardOptionRewardChoiceGiftItem
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderOrderDetailRewardOptionRewardChoiceGiftItem
     */
    uom?: string;
    /**
     * 
     * @type {ComIbmCommerceFoundationCommonDatatypesPartNumberIdentifierType}
     * @memberof OrderOrderDetailRewardOptionRewardChoiceGiftItem
     */
    externalIdentifier?: ComIbmCommerceFoundationCommonDatatypesPartNumberIdentifierType;
    /**
     * 
     * @type {string}
     * @memberof OrderOrderDetailRewardOptionRewardChoiceGiftItem
     */
    productId?: string;
}

