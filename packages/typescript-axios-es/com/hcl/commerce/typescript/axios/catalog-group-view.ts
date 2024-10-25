/* tslint:disable */
/* eslint-disable */
/**
 * HCL Commerce Services - Query Service
 * Query Service Api Documentation
 *
 * The version of the OpenAPI document: 9.1.6
 * 
 * (C) Copyright HCL Technologies Limited 2021
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UserDataType } from './user-data-type';

/**
 * 
 * @export
 * @interface CatalogGroupView
 */
export interface CatalogGroupView {
    /**
     * 
     * @type {string}
     * @memberof CatalogGroupView
     */
    identifier?: string;
    /**
     * 
     * @type {string}
     * @memberof CatalogGroupView
     */
    fullImage?: string;
    /**
     * 
     * @type {string}
     * @memberof CatalogGroupView
     */
    thumbnail?: string;
    /**
     * 
     * @type {number}
     * @memberof CatalogGroupView
     */
    storeID?: number;
    /**
     * 
     * @type {string}
     * @memberof CatalogGroupView
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CatalogGroupView
     */
    shortDescription?: string;
    /**
     * 
     * @type {UserDataType}
     * @memberof CatalogGroupView
     */
    userData?: UserDataType;
    /**
     * 
     * @type {Array<string>}
     * @memberof CatalogGroupView
     */
    parentCatalogGroupID?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CatalogGroupView
     */
    childCatalogGroupID?: Array<string>;
}


