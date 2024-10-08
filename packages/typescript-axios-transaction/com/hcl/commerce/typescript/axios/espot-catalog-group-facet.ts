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

import { EspotCatalogGroupFacetAttribute } from './espot-catalog-group-facet-attribute';
import { EspotCatalogGroupFacetFacetIdentifier } from './espot-catalog-group-facet-facet-identifier';

/**
 * 
 * @export
 * @interface EspotCatalogGroupFacet
 */
export interface EspotCatalogGroupFacet {
    /**
     * 
     * @type {EspotCatalogGroupFacetAttribute}
     * @memberof EspotCatalogGroupFacet
     */
    attribute: EspotCatalogGroupFacetAttribute;
    /**
     * 
     * @type {EspotCatalogGroupFacetFacetIdentifier}
     * @memberof EspotCatalogGroupFacet
     */
    facetIdentifier: EspotCatalogGroupFacetFacetIdentifier;
}


