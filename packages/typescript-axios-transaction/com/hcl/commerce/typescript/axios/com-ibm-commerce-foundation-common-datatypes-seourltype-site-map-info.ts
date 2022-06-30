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

import { ComIbmCommerceFoundationCommonDatatypesSEOURLTypeSiteMapInfoUserData } from './com-ibm-commerce-foundation-common-datatypes-seourltype-site-map-info-user-data';

/**
 * 
 * @export
 * @interface ComIbmCommerceFoundationCommonDatatypesSEOURLTypeSiteMapInfo
 */
export interface ComIbmCommerceFoundationCommonDatatypesSEOURLTypeSiteMapInfo {
    /**
     * 
     * @type {number}
     * @memberof ComIbmCommerceFoundationCommonDatatypesSEOURLTypeSiteMapInfo
     */
    priority?: number;
    /**
     * 
     * @type {ComIbmCommerceFoundationCommonDatatypesSEOURLTypeSiteMapInfoUserData}
     * @memberof ComIbmCommerceFoundationCommonDatatypesSEOURLTypeSiteMapInfo
     */
    userData?: ComIbmCommerceFoundationCommonDatatypesSEOURLTypeSiteMapInfoUserData;
    /**
     * 
     * @type {number}
     * @memberof ComIbmCommerceFoundationCommonDatatypesSEOURLTypeSiteMapInfo
     */
    mobilePriority?: number;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceFoundationCommonDatatypesSEOURLTypeSiteMapInfo
     */
    changeFrequency?: string;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceFoundationCommonDatatypesSEOURLTypeSiteMapInfo
     */
    mobileChangeFrequency?: string;
}

