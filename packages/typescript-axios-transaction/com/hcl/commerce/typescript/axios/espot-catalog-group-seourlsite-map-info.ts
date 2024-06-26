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

import { EspotCatalogGroupSEOURLSiteMapInfoUserData } from './espot-catalog-group-seourlsite-map-info-user-data';

/**
 * 
 * @export
 * @interface EspotCatalogGroupSEOURLSiteMapInfo
 */
export interface EspotCatalogGroupSEOURLSiteMapInfo {
    /**
     * 
     * @type {number}
     * @memberof EspotCatalogGroupSEOURLSiteMapInfo
     */
    priority?: number;
    /**
     * 
     * @type {EspotCatalogGroupSEOURLSiteMapInfoUserData}
     * @memberof EspotCatalogGroupSEOURLSiteMapInfo
     */
    userData?: EspotCatalogGroupSEOURLSiteMapInfoUserData;
    /**
     * 
     * @type {number}
     * @memberof EspotCatalogGroupSEOURLSiteMapInfo
     */
    mobilePriority?: number;
    /**
     * 
     * @type {string}
     * @memberof EspotCatalogGroupSEOURLSiteMapInfo
     */
    changeFrequency?: string;
    /**
     * 
     * @type {string}
     * @memberof EspotCatalogGroupSEOURLSiteMapInfo
     */
    mobileChangeFrequency?: string;
}


