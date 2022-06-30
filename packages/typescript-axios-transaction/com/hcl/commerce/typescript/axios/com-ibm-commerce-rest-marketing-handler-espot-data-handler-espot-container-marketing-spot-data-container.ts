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

import { ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainer } from './com-ibm-commerce-rest-marketing-handler-espot-data-handler-espot-container-marketing-spot-data-container-base-marketing-spot-activity-data-container';
import { ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerDefaultContentDisplaySequenceContainer } from './com-ibm-commerce-rest-marketing-handler-espot-data-handler-espot-container-marketing-spot-data-container-default-content-display-sequence-container';
import { ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerFilteredResultContainer } from './com-ibm-commerce-rest-marketing-handler-espot-data-handler-espot-container-marketing-spot-data-container-filtered-result-container';
import { ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerMarketingSpotDataTitleContainer } from './com-ibm-commerce-rest-marketing-handler-espot-data-handler-espot-container-marketing-spot-data-container-marketing-spot-data-title-container';

/**
 * Data to display in the e-marketing spot.
 * @export
 * @interface ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainer
 */
export interface ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainer {
    /**
     * The store identifier.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainer
     */
    eSpotStoreId?: string;
    /**
     * The number of seconds from now to the earliest start date or end date of activities scheduled to the e-Marketing Spot.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainer
     */
    nextTimeLimit?: string;
    /**
     * The unique identifier of the e-marketing spot.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainer
     */
    marketingSpotIdentifier: string;
    /**
     * Base e-marketing spot activity data.
     * @type {Array<ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainer>}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainer
     */
    baseMarketingSpotActivityData?: Array<ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainer>;
    /**
     * Result that was filtered from display in the e-Marketing Spot.
     * @type {Array<ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerFilteredResultContainer>}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainer
     */
    filteredResult?: Array<ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerFilteredResultContainer>;
    /**
     * Sequence values of the default content to display in the e-marketing spot.
     * @type {Array<ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerDefaultContentDisplaySequenceContainer>}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainer
     */
    defaultContentDisplaySequence?: Array<ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerDefaultContentDisplaySequenceContainer>;
    /**
     * Marketing title to display in the e-marketing spot.
     * @type {Array<ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerMarketingSpotDataTitleContainer>}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainer
     */
    marketingSpotDataTitle?: Array<ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerMarketingSpotDataTitleContainer>;
    /**
     * The e-marketing Spot name.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainer
     */
    eSpotName?: string;
    /**
     * The current caching behavior of the e-marketing spot.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainer
     */
    behavior?: string;
    /**
     * Information about the activity evaluation.
     * @type {Array<string>}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainer
     */
    previewReport?: Array<string>;
}

