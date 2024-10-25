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

import { CartCartUpdateItemOrderExtendAttribute } from './cart-cart-update-item-order-extend-attribute';
import { CartCartUpdateItemOrderItem } from './cart-cart-update-item-order-item';
import { CartCartUpdateItemUserDataField } from './cart-cart-update-item-user-data-field';

/**
 * 
 * @export
 * @interface CartCartUpdateItem
 */
export interface CartCartUpdateItem {
    /**
     * 
     * @type {string}
     * @memberof CartCartUpdateItem
     */
    orderId?: string;
    /**
     * 
     * @type {string}
     * @memberof CartCartUpdateItem
     */
    shipAsComplete?: string;
    /**
     * 
     * @type {string}
     * @memberof CartCartUpdateItem
     */
    orderComment?: string;
    /**
     * 
     * @type {Array<CartCartUpdateItemOrderItem>}
     * @memberof CartCartUpdateItem
     */
    orderItem?: Array<CartCartUpdateItemOrderItem>;
    /**
     * 
     * @type {string}
     * @memberof CartCartUpdateItem
     */
    orderDescription?: string;
    /**
     * 
     * @type {Array<CartCartUpdateItemOrderExtendAttribute>}
     * @memberof CartCartUpdateItem
     */
    orderExtendAttribute?: Array<CartCartUpdateItemOrderExtendAttribute>;
    /**
     * 
     * @type {Array<CartCartUpdateItemUserDataField>}
     * @memberof CartCartUpdateItem
     */
    userDataField?: Array<CartCartUpdateItemUserDataField>;
}


