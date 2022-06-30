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

import { CategoryviewCategorySummaryWebContentViewMetaData } from './categoryview-category-summary-web-content-view-meta-data';
import { CategoryviewCategorySummaryWebContentViewUserDataField } from './categoryview-category-summary-web-content-view-user-data-field';

/**
 * 
 * @export
 * @interface CategoryviewCategorySummaryWebContentView
 */
export interface CategoryviewCategorySummaryWebContentView {
    /**
     * 
     * @type {string}
     * @memberof CategoryviewCategorySummaryWebContentView
     */
    url?: string;
    /**
     * 
     * @type {Array<CategoryviewCategorySummaryWebContentViewUserDataField>}
     * @memberof CategoryviewCategorySummaryWebContentView
     */
    userDataField?: Array<CategoryviewCategorySummaryWebContentViewUserDataField>;
    /**
     * 
     * @type {string}
     * @memberof CategoryviewCategorySummaryWebContentView
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CategoryviewCategorySummaryWebContentView
     */
    uniqueID?: string;
    /**
     * 
     * @type {Array<CategoryviewCategorySummaryWebContentViewMetaData>}
     * @memberof CategoryviewCategorySummaryWebContentView
     */
    MetaData?: Array<CategoryviewCategorySummaryWebContentViewMetaData>;
}

