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

import { CategoryviewCategoryDetailsBreadCrumbTrailEntryView } from './categoryview-category-details-bread-crumb-trail-entry-view';
import { CategoryviewCategoryDetailsCatalogGroupView } from './categoryview-category-details-catalog-group-view';
import { CategoryviewCategoryDetailsFacetView } from './categoryview-category-details-facet-view';
import { CategoryviewCategoryDetailsMetaData } from './categoryview-category-details-meta-data';
import { CategoryviewCategoryDetailsSuggestionView } from './categoryview-category-details-suggestion-view';
import { CategoryviewCategoryDetailsUserDataField } from './categoryview-category-details-user-data-field';
import { CategoryviewCategoryDetailsWebContentView } from './categoryview-category-details-web-content-view';

/**
 * 
 * @export
 * @interface CategoryviewCategoryDetails
 */
export interface CategoryviewCategoryDetails {
    /**
     * 
     * @type {string}
     * @memberof CategoryviewCategoryDetails
     */
    recordSetStartNumber?: string;
    /**
     * 
     * @type {Array<CategoryviewCategoryDetailsSuggestionView>}
     * @memberof CategoryviewCategoryDetails
     */
    SuggestionView?: Array<CategoryviewCategoryDetailsSuggestionView>;
    /**
     * 
     * @type {string}
     * @memberof CategoryviewCategoryDetails
     */
    recordSetComplete?: string;
    /**
     * 
     * @type {Array<CategoryviewCategoryDetailsFacetView>}
     * @memberof CategoryviewCategoryDetails
     */
    FacetView?: Array<CategoryviewCategoryDetailsFacetView>;
    /**
     * 
     * @type {string}
     * @memberof CategoryviewCategoryDetails
     */
    recordSetCount?: string;
    /**
     * 
     * @type {string}
     * @memberof CategoryviewCategoryDetails
     */
    indexStatus?: string;
    /**
     * 
     * @type {string}
     * @memberof CategoryviewCategoryDetails
     */
    report?: string;
    /**
     * 
     * @type {Array<CategoryviewCategoryDetailsWebContentView>}
     * @memberof CategoryviewCategoryDetails
     */
    WebContentView?: Array<CategoryviewCategoryDetailsWebContentView>;
    /**
     * 
     * @type {Array<CategoryviewCategoryDetailsUserDataField>}
     * @memberof CategoryviewCategoryDetails
     */
    userDataField?: Array<CategoryviewCategoryDetailsUserDataField>;
    /**
     * 
     * @type {string}
     * @memberof CategoryviewCategoryDetails
     */
    recordSetTotal?: string;
    /**
     * 
     * @type {Array<CategoryviewCategoryDetailsBreadCrumbTrailEntryView>}
     * @memberof CategoryviewCategoryDetails
     */
    BreadCrumbTrailEntryView?: Array<CategoryviewCategoryDetailsBreadCrumbTrailEntryView>;
    /**
     * 
     * @type {Array<CategoryviewCategoryDetailsCatalogGroupView>}
     * @memberof CategoryviewCategoryDetails
     */
    CatalogGroupView?: Array<CategoryviewCategoryDetailsCatalogGroupView>;
    /**
     * 
     * @type {string}
     * @memberof CategoryviewCategoryDetails
     */
    finalQuery?: string;
    /**
     * 
     * @type {Array<CategoryviewCategoryDetailsMetaData>}
     * @memberof CategoryviewCategoryDetails
     */
    MetaData?: Array<CategoryviewCategoryDetailsMetaData>;
}

