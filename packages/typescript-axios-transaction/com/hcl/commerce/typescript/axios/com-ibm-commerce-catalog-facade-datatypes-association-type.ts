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

import { ComIbmCommerceCatalogFacadeDatatypesAssociationTypeAttributes } from './com-ibm-commerce-catalog-facade-datatypes-association-type-attributes';
import { ComIbmCommerceCatalogFacadeDatatypesAssociationTypeCatalogEntryReference } from './com-ibm-commerce-catalog-facade-datatypes-association-type-catalog-entry-reference';
import { ComIbmCommerceCatalogFacadeDatatypesAssociationTypeCatalogGroupReference } from './com-ibm-commerce-catalog-facade-datatypes-association-type-catalog-group-reference';

/**
 * 
 * @export
 * @interface ComIbmCommerceCatalogFacadeDatatypesAssociationType
 */
export interface ComIbmCommerceCatalogFacadeDatatypesAssociationType {
    /**
     * 
     * @type {ComIbmCommerceCatalogFacadeDatatypesAssociationTypeCatalogGroupReference}
     * @memberof ComIbmCommerceCatalogFacadeDatatypesAssociationType
     */
    catalogGroupReference?: ComIbmCommerceCatalogFacadeDatatypesAssociationTypeCatalogGroupReference;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceCatalogFacadeDatatypesAssociationType
     */
    name?: string;
    /**
     * 
     * @type {ComIbmCommerceCatalogFacadeDatatypesAssociationTypeCatalogEntryReference}
     * @memberof ComIbmCommerceCatalogFacadeDatatypesAssociationType
     */
    catalogEntryReference?: ComIbmCommerceCatalogFacadeDatatypesAssociationTypeCatalogEntryReference;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceCatalogFacadeDatatypesAssociationType
     */
    associationCodeType?: string;
    /**
     * 
     * @type {number}
     * @memberof ComIbmCommerceCatalogFacadeDatatypesAssociationType
     */
    displaySequence?: number;
    /**
     * 
     * @type {object}
     * @memberof ComIbmCommerceCatalogFacadeDatatypesAssociationType
     */
    associatedObject?: object;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceCatalogFacadeDatatypesAssociationType
     */
    uniqueID?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ComIbmCommerceCatalogFacadeDatatypesAssociationType
     */
    externalSource?: boolean;
    /**
     * 
     * @type {Array<ComIbmCommerceCatalogFacadeDatatypesAssociationTypeAttributes>}
     * @memberof ComIbmCommerceCatalogFacadeDatatypesAssociationType
     */
    attributes?: Array<ComIbmCommerceCatalogFacadeDatatypesAssociationTypeAttributes>;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceCatalogFacadeDatatypesAssociationType
     */
    semantic?: string;
    /**
     * 
     * @type {number}
     * @memberof ComIbmCommerceCatalogFacadeDatatypesAssociationType
     */
    quantity?: number;
}


