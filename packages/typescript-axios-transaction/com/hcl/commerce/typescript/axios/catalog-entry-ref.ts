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

import { Owner } from './owner';

/**
 * The reference to the catalog entry.
 * @export
 * @interface CatalogEntryRef
 */
export interface CatalogEntryRef {
    /**
     * 
     * @type {Owner}
     * @memberof CatalogEntryRef
     */
    owner?: Owner;
    /**
     * The unique ID of the catalog entry.
     * @type {number}
     * @memberof CatalogEntryRef
     */
    catalogEntryReferenceNumber?: number;
    /**
     * The part number of the catalog entry.
     * @type {string}
     * @memberof CatalogEntryRef
     */
    partNumber?: string;
}


