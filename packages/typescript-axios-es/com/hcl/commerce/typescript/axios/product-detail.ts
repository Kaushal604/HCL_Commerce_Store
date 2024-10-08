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

import { ADAttribute } from './adattribute';
import { Attachment } from './attachment';
import { Attribute } from './attribute';
import { Component } from './component';
import { MerchandisingAssociation } from './merchandising-association';
import { MetaData } from './meta-data';
import { Price } from './price';
import { SKU } from './sku';
import { UserDataType } from './user-data-type';

/**
 * 
 * @export
 * @interface ProductDetail
 */
export interface ProductDetail {
    /**
     * 
     * @type {Array<ADAttribute>}
     * @memberof ProductDetail
     */
    ad_attribute?: Array<ADAttribute>;
    /**
     * 
     * @type {Array<Attribute>}
     * @memberof ProductDetail
     */
    attributes?: Array<Attribute>;
    /**
     * 
     * @type {Array<UserDataType>}
     * @memberof ProductDetail
     */
    userData?: Array<UserDataType>;
    /**
     * 
     * @type {Array<Price>}
     * @memberof ProductDetail
     */
    price?: Array<Price>;
    /**
     * 
     * @type {string}
     * @memberof ProductDetail
     */
    numberOfSKUs?: string;
    /**
     * 
     * @type {number}
     * @memberof ProductDetail
     */
    disallowRecurringOrder?: number;
    /**
     * 
     * @type {string}
     * @memberof ProductDetail
     */
    manufacturer?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProductDetail
     */
    parentCatalogGroupID?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ProductDetail
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof ProductDetail
     */
    uniqueID?: number;
    /**
     * 
     * @type {string}
     * @memberof ProductDetail
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductDetail
     */
    thumbnail?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductDetail
     */
    shortDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductDetail
     */
    longDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductDetail
     */
    keyword?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ProductDetail
     */
    hasSingleSKU?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ProductDetail
     */
    hasSingleSKUESet?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProductDetail
     */
    singleSKUCatalogEntryID?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductDetail
     */
    storeID?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductDetail
     */
    fullImage?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductDetail
     */
    parentCatalogEntryID?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductDetail
     */
    subscriptionTypeCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductDetail
     */
    dynamicKitURL?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductDetail
     */
    dynamicKitDefaultConfiguration?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ProductDetail
     */
    dynamicKitDefaultConfigurationComplete?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ProductDetail
     */
    dynamicKitDefaultConfigurationCompleteESet?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProductDetail
     */
    dynamicKitModelReference?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductDetail
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductDetail
     */
    metaDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductDetail
     */
    metaKeyword?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductDetail
     */
    fullImageAltDescription?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ProductDetail
     */
    buyable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProductDetail
     */
    catalogEntryTypeCode?: string;
    /**
     * 
     * @type {number}
     * @memberof ProductDetail
     */
    recordSetCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductDetail
     */
    recordSetTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductDetail
     */
    recordSetTotalMatches?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ProductDetail
     */
    recordSetComplete?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ProductDetail
     */
    recordSetStartNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof ProductDetail
     */
    resourceName?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductDetail
     */
    resourceId?: string;
    /**
     * 
     * @type {MetaData}
     * @memberof ProductDetail
     */
    metaData?: MetaData;
    /**
     * 
     * @type {Array<Component>}
     * @memberof ProductDetail
     */
    components?: Array<Component>;
    /**
     * 
     * @type {Array<MerchandisingAssociation>}
     * @memberof ProductDetail
     */
    merchandisingAssociations?: Array<MerchandisingAssociation>;
    /**
     * 
     * @type {Array<Attachment>}
     * @memberof ProductDetail
     */
    attachments?: Array<Attachment>;
    /**
     * 
     * @type {Array<SKU>}
     * @memberof ProductDetail
     */
    skus?: Array<SKU>;
}


