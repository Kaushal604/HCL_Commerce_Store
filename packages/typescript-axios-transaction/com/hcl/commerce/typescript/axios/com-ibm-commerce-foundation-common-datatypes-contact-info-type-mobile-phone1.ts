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

import { ComIbmCommerceFoundationCommonDatatypesContactInfoTypeMobilePhone1UserData } from './com-ibm-commerce-foundation-common-datatypes-contact-info-type-mobile-phone1-user-data';

/**
 * 
 * @export
 * @interface ComIbmCommerceFoundationCommonDatatypesContactInfoTypeMobilePhone1
 */
export interface ComIbmCommerceFoundationCommonDatatypesContactInfoTypeMobilePhone1 {
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceFoundationCommonDatatypesContactInfoTypeMobilePhone1
     */
    country: string;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceFoundationCommonDatatypesContactInfoTypeMobilePhone1
     */
    value: string;
    /**
     * 
     * @type {ComIbmCommerceFoundationCommonDatatypesContactInfoTypeMobilePhone1UserData}
     * @memberof ComIbmCommerceFoundationCommonDatatypesContactInfoTypeMobilePhone1
     */
    userData?: ComIbmCommerceFoundationCommonDatatypesContactInfoTypeMobilePhone1UserData;
}


