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

import { ComIbmCommerceFoundationCommonDatatypesDescriptionType } from './com-ibm-commerce-foundation-common-datatypes-description-type';

/**
 * 
 * @export
 * @interface SegmentSegmentsItem
 */
export interface SegmentSegmentsItem {
    /**
     * 
     * @type {Array<string>}
     * @memberof SegmentSegmentsItem
     */
    usage?: Array<string>;
    /**
     * 
     * @type {ComIbmCommerceFoundationCommonDatatypesDescriptionType}
     * @memberof SegmentSegmentsItem
     */
    displayName?: ComIbmCommerceFoundationCommonDatatypesDescriptionType;
    /**
     * 
     * @type {ComIbmCommerceFoundationCommonDatatypesDescriptionType}
     * @memberof SegmentSegmentsItem
     */
    description?: ComIbmCommerceFoundationCommonDatatypesDescriptionType;
    /**
     * 
     * @type {string}
     * @memberof SegmentSegmentsItem
     */
    id?: string;
}


