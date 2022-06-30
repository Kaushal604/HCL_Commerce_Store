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

import { EspotCatalogGroupRuleElement } from './espot-catalog-group-rule-element';
import { EspotCatalogGroupRuleNVP } from './espot-catalog-group-rule-nvp';
import { EspotCatalogGroupRuleUserData } from './espot-catalog-group-rule-user-data';

/**
 * 
 * @export
 * @interface EspotCatalogGroupRule
 */
export interface EspotCatalogGroupRule {
    /**
     * 
     * @type {Array<EspotCatalogGroupRuleUserData>}
     * @memberof EspotCatalogGroupRule
     */
    userData?: Array<EspotCatalogGroupRuleUserData>;
    /**
     * 
     * @type {Array<EspotCatalogGroupRuleNVP>}
     * @memberof EspotCatalogGroupRule
     */
    nVP?: Array<EspotCatalogGroupRuleNVP>;
    /**
     * 
     * @type {string}
     * @memberof EspotCatalogGroupRule
     */
    uniqueID?: string;
    /**
     * 
     * @type {Array<EspotCatalogGroupRuleElement>}
     * @memberof EspotCatalogGroupRule
     */
    element?: Array<EspotCatalogGroupRuleElement>;
}

