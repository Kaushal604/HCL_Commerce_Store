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

import { InventoryavailabilityInventoryavailabilityItemUserDataField } from './inventoryavailability-inventoryavailability-item-user-data-field';

/**
 * 
 * @export
 * @interface InventoryavailabilityInventoryavailabilityItem
 */
export interface InventoryavailabilityInventoryavailabilityItem {
    /**
     * 
     * @type {string}
     * @memberof InventoryavailabilityInventoryavailabilityItem
     */
    physicalStoreName?: string;
    /**
     * 
     * @type {string}
     * @memberof InventoryavailabilityInventoryavailabilityItem
     */
    onlineStoreName?: string;
    /**
     * 
     * @type {string}
     * @memberof InventoryavailabilityInventoryavailabilityItem
     */
    availabilityDateTime?: string;
    /**
     * 
     * @type {string}
     * @memberof InventoryavailabilityInventoryavailabilityItem
     */
    onlineStoreId?: string;
    /**
     * 
     * @type {string}
     * @memberof InventoryavailabilityInventoryavailabilityItem
     */
    unitOfMeasure?: string;
    /**
     * 
     * @type {number}
     * @memberof InventoryavailabilityInventoryavailabilityItem
     */
    availableQuantity?: number;
    /**
     * 
     * @type {string}
     * @memberof InventoryavailabilityInventoryavailabilityItem
     */
    inventoryStatus?: string;
    /**
     * 
     * @type {Array<InventoryavailabilityInventoryavailabilityItemUserDataField>}
     * @memberof InventoryavailabilityInventoryavailabilityItem
     */
    userDataField?: Array<InventoryavailabilityInventoryavailabilityItemUserDataField>;
    /**
     * 
     * @type {string}
     * @memberof InventoryavailabilityInventoryavailabilityItem
     */
    physicalStoreId?: string;
    /**
     * 
     * @type {string}
     * @memberof InventoryavailabilityInventoryavailabilityItem
     */
    x_customField1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InventoryavailabilityInventoryavailabilityItem
     */
    x_customField2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InventoryavailabilityInventoryavailabilityItem
     */
    x_customField3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InventoryavailabilityInventoryavailabilityItem
     */
    productId?: string;
}


