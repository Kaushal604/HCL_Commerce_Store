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

import { PricePriceItem } from './price-price-item';

/**
 * 
 * @export
 * @interface PricePrice
 */
export interface PricePrice {
    /**
     * 
     * @type {number}
     * @memberof PricePrice
     */
    recordSetCount?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PricePrice
     */
    recordSetComplete?: boolean;
    /**
     * 
     * @type {Array<PricePriceItem>}
     * @memberof PricePrice
     */
    EntitledPrice?: Array<PricePriceItem>;
    /**
     * 
     * @type {number}
     * @memberof PricePrice
     */
    recordSetStartNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof PricePrice
     */
    recordSetTotal?: number;
}

