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

import { CategoryviewCategorySummaryFacetViewEntry } from './categoryview-category-summary-facet-view-entry';

/**
 * 
 * @export
 * @interface CategoryviewCategorySummaryFacetView
 */
export interface CategoryviewCategorySummaryFacetView {
    /**
     * 
     * @type {Array<CategoryviewCategorySummaryFacetViewEntry>}
     * @memberof CategoryviewCategorySummaryFacetView
     */
    entry?: Array<CategoryviewCategorySummaryFacetViewEntry>;
    /**
     * 
     * @type {string}
     * @memberof CategoryviewCategorySummaryFacetView
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CategoryviewCategorySummaryFacetView
     */
    value?: string;
}


