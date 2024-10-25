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

import { ComIbmCommerceFoundationCommonDatatypesStoreExternalIdentifierType } from './com-ibm-commerce-foundation-common-datatypes-store-external-identifier-type';

/**
 * 
 * @export
 * @interface EspotAttachmentExternalIdentifier
 */
export interface EspotAttachmentExternalIdentifier {
    /**
     * 
     * @type {string}
     * @memberof EspotAttachmentExternalIdentifier
     */
    attachementOwnerId?: string;
    /**
     * 
     * @type {string}
     * @memberof EspotAttachmentExternalIdentifier
     */
    attachementStoreId?: string;
    /**
     * 
     * @type {ComIbmCommerceFoundationCommonDatatypesStoreExternalIdentifierType}
     * @memberof EspotAttachmentExternalIdentifier
     */
    attachementStoreExternalId?: ComIbmCommerceFoundationCommonDatatypesStoreExternalIdentifierType;
    /**
     * 
     * @type {string}
     * @memberof EspotAttachmentExternalIdentifier
     */
    attachementExternalId: string;
}


