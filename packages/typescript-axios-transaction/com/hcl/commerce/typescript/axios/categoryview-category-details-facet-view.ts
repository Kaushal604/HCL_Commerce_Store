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

import { CategoryviewCategoryDetailsFacetViewEntry } from './categoryview-category-details-facet-view-entry';

/**
 * 
 * @export
 * @interface CategoryviewCategoryDetailsFacetView
 */
export interface CategoryviewCategoryDetailsFacetView {
    /**
     * 
     * @type {Array<CategoryviewCategoryDetailsFacetViewEntry>}
     * @memberof CategoryviewCategoryDetailsFacetView
     */
    entry?: Array<CategoryviewCategoryDetailsFacetViewEntry>;
    /**
     * 
     * @type {string}
     * @memberof CategoryviewCategoryDetailsFacetView
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CategoryviewCategoryDetailsFacetView
     */
    value?: string;
}


