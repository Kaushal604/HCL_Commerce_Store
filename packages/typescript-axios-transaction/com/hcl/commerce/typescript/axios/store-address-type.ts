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


/**
 * 
 * @export
 * @interface StoreAddressType
 */
export interface StoreAddressType {
    /**
     * 
     * @type {string}
     * @memberof StoreAddressType
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof StoreAddressType
     */
    zipOrPostalCode?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof StoreAddressType
     */
    addressLine?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof StoreAddressType
     */
    stateOrProvinceName?: string;
    /**
     * 
     * @type {string}
     * @memberof StoreAddressType
     */
    country?: string;
}


