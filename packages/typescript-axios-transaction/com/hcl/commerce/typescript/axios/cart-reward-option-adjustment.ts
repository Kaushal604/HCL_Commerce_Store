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

import { CartRewardOptionAdjustmentAmount } from './cart-reward-option-adjustment-amount';
import { CartRewardOptionAdjustmentCalculationCodeID } from './cart-reward-option-adjustment-calculation-code-id';
import { CartRewardOptionAdjustmentDescription } from './cart-reward-option-adjustment-description';
import { CartRewardOptionAdjustmentUserData } from './cart-reward-option-adjustment-user-data';

/**
 * 
 * @export
 * @interface CartRewardOptionAdjustment
 */
export interface CartRewardOptionAdjustment {
    /**
     * 
     * @type {CartRewardOptionAdjustmentUserData}
     * @memberof CartRewardOptionAdjustment
     */
    userData?: CartRewardOptionAdjustmentUserData;
    /**
     * 
     * @type {string}
     * @memberof CartRewardOptionAdjustment
     */
    code?: string;
    /**
     * 
     * @type {CartRewardOptionAdjustmentDescription}
     * @memberof CartRewardOptionAdjustment
     */
    description?: CartRewardOptionAdjustmentDescription;
    /**
     * 
     * @type {string}
     * @memberof CartRewardOptionAdjustment
     */
    displayLevel?: string;
    /**
     * 
     * @type {CartRewardOptionAdjustmentCalculationCodeID}
     * @memberof CartRewardOptionAdjustment
     */
    calculationCodeID?: CartRewardOptionAdjustmentCalculationCodeID;
    /**
     * 
     * @type {CartRewardOptionAdjustmentAmount}
     * @memberof CartRewardOptionAdjustment
     */
    amount?: CartRewardOptionAdjustmentAmount;
    /**
     * 
     * @type {string}
     * @memberof CartRewardOptionAdjustment
     */
    promotionType?: string;
    /**
     * 
     * @type {string}
     * @memberof CartRewardOptionAdjustment
     */
    usage?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CartRewardOptionAdjustment
     */
    isPromotionCodeRequired?: boolean;
}

