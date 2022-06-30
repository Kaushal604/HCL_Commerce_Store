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

import { CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItemAttributesValues } from './catalog-entry-ibmadmin-catalog-entry-defining-attribute-dictionary-attribute-item-attributes-values';
import { ComIbmCommerceCatalogFacadeDatatypesValueType } from './com-ibm-commerce-catalog-facade-datatypes-value-type';
import { JavaUtilMapEntry } from './java-util-map-entry';

/**
 * 
 * @export
 * @interface CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItemAttributes
 */
export interface CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItemAttributes {
    /**
     * 
     * @type {boolean}
     * @memberof CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItemAttributes
     */
    comparable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItemAttributes
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItemAttributes
     */
    searchable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItemAttributes
     */
    dataType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItemAttributes
     */
    displayable?: boolean;
    /**
     * 
     * @type {ComIbmCommerceCatalogFacadeDatatypesValueType}
     * @memberof CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItemAttributes
     */
    value?: ComIbmCommerceCatalogFacadeDatatypesValueType;
    /**
     * 
     * @type {Array<CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItemAttributesValues>}
     * @memberof CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItemAttributes
     */
    values?: Array<CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItemAttributesValues>;
    /**
     * 
     * @type {string}
     * @memberof CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItemAttributes
     */
    uniqueID?: string;
    /**
     * 
     * @type {Array<JavaUtilMapEntry>}
     * @memberof CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItemAttributes
     */
    extendedValue?: Array<JavaUtilMapEntry>;
    /**
     * 
     * @type {string}
     * @memberof CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItemAttributes
     */
    usage?: string;
    /**
     * 
     * @type {string}
     * @memberof CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItemAttributes
     */
    name?: string;
}

