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

import { CartRewardOptionCalculationCodeIDCalculationCodeExternalIdentifierStoreIdentifier } from './cart-reward-option-calculation-code-idcalculation-code-external-identifier-store-identifier';

/**
 * 
 * @export
 * @interface CartRewardOptionCalculationCodeIDCalculationCodeExternalIdentifier
 */
export interface CartRewardOptionCalculationCodeIDCalculationCodeExternalIdentifier {
    /**
     * 
     * @type {string}
     * @memberof CartRewardOptionCalculationCodeIDCalculationCodeExternalIdentifier
     */
    calculationUsageID?: string;
    /**
     * 
     * @type {string}
     * @memberof CartRewardOptionCalculationCodeIDCalculationCodeExternalIdentifier
     */
    code?: string;
    /**
     * 
     * @type {CartRewardOptionCalculationCodeIDCalculationCodeExternalIdentifierStoreIdentifier}
     * @memberof CartRewardOptionCalculationCodeIDCalculationCodeExternalIdentifier
     */
    storeIdentifier?: CartRewardOptionCalculationCodeIDCalculationCodeExternalIdentifierStoreIdentifier;
}

