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

import { ProductSuggestionView } from './product-suggestion-view';

/**
 * 
 * @export
 * @interface ProductSuggestion
 */
export interface ProductSuggestion {
    /**
     * 
     * @type {number}
     * @memberof ProductSuggestion
     */
    recordSetCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductSuggestion
     */
    recordSetTotal?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ProductSuggestion
     */
    recordSetComplete?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ProductSuggestion
     */
    recordSetStartNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof ProductSuggestion
     */
    resourceName?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductSuggestion
     */
    resourceId?: string;
    /**
     * 
     * @type {Array<ProductSuggestionView>}
     * @memberof ProductSuggestion
     */
    suggestionView?: Array<ProductSuggestionView>;
}


