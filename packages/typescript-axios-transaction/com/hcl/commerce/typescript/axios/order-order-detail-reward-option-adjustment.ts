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

import { OrderOrderDetailRewardOptionAdjustmentAmount } from './order-order-detail-reward-option-adjustment-amount';
import { OrderOrderDetailRewardOptionAdjustmentCalculationCodeID } from './order-order-detail-reward-option-adjustment-calculation-code-id';
import { OrderOrderDetailRewardOptionAdjustmentDescription } from './order-order-detail-reward-option-adjustment-description';
import { OrderOrderDetailRewardOptionAdjustmentUserData } from './order-order-detail-reward-option-adjustment-user-data';

/**
 * 
 * @export
 * @interface OrderOrderDetailRewardOptionAdjustment
 */
export interface OrderOrderDetailRewardOptionAdjustment {
    /**
     * 
     * @type {OrderOrderDetailRewardOptionAdjustmentUserData}
     * @memberof OrderOrderDetailRewardOptionAdjustment
     */
    userData?: OrderOrderDetailRewardOptionAdjustmentUserData;
    /**
     * 
     * @type {string}
     * @memberof OrderOrderDetailRewardOptionAdjustment
     */
    code?: string;
    /**
     * 
     * @type {OrderOrderDetailRewardOptionAdjustmentDescription}
     * @memberof OrderOrderDetailRewardOptionAdjustment
     */
    description?: OrderOrderDetailRewardOptionAdjustmentDescription;
    /**
     * 
     * @type {string}
     * @memberof OrderOrderDetailRewardOptionAdjustment
     */
    displayLevel?: string;
    /**
     * 
     * @type {OrderOrderDetailRewardOptionAdjustmentCalculationCodeID}
     * @memberof OrderOrderDetailRewardOptionAdjustment
     */
    calculationCodeID?: OrderOrderDetailRewardOptionAdjustmentCalculationCodeID;
    /**
     * 
     * @type {OrderOrderDetailRewardOptionAdjustmentAmount}
     * @memberof OrderOrderDetailRewardOptionAdjustment
     */
    amount?: OrderOrderDetailRewardOptionAdjustmentAmount;
    /**
     * 
     * @type {string}
     * @memberof OrderOrderDetailRewardOptionAdjustment
     */
    promotionType?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderOrderDetailRewardOptionAdjustment
     */
    usage?: string;
    /**
     * 
     * @type {boolean}
     * @memberof OrderOrderDetailRewardOptionAdjustment
     */
    isPromotionCodeRequired?: boolean;
}


