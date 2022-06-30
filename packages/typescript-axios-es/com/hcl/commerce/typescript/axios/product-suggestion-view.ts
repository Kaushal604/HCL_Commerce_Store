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

import { ProductSuggestionEntry } from './product-suggestion-entry';

/**
 * 
 * @export
 * @interface ProductSuggestionView
 */
export interface ProductSuggestionView {
    /**
     * 
     * @type {string}
     * @memberof ProductSuggestionView
     */
    identifier?: string;
    /**
     * 
     * @type {Array<ProductSuggestionEntry>}
     * @memberof ProductSuggestionView
     */
    entry?: Array<ProductSuggestionEntry>;
}

