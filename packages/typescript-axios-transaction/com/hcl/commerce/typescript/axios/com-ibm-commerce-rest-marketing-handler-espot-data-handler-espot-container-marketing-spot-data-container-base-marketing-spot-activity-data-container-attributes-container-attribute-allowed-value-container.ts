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

import { ComIbmCommerceRestMarketingHandlerESpotDataHandlerNVPAttributesContainer } from './com-ibm-commerce-rest-marketing-handler-espot-data-handler-nvpattributes-container';

/**
 * Structure containing the allowed values for the attribute.
 * @export
 * @interface ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainerAttributesContainerAttributeAllowedValueContainer
 */
export interface ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainerAttributesContainerAttributeAllowedValueContainer {
    /**
     * Type definition for an IntegerValue attribute.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainerAttributesContainerAttributeAllowedValueContainer
     */
    integerValue?: string;
    /**
     * Type definition for a FloatValue attribute.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainerAttributesContainerAttributeAllowedValueContainer
     */
    floatValue?: string;
    /**
     * Abstract attribute value for customer extension.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainerAttributesContainerAttributeAllowedValueContainer
     */
    attributeValue?: string;
    /**
     * Type definition for an StringValue attribute.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainerAttributesContainerAttributeAllowedValueContainer
     */
    stringValue?: string;
    /**
     * Name-value pairs for defining additional attribute values such as images and or attachments. Can also be used for customer extension.
     * @type {Array<ComIbmCommerceRestMarketingHandlerESpotDataHandlerNVPAttributesContainer>}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainerAttributesContainerAttributeAllowedValueContainer
     */
    extendedValue?: Array<ComIbmCommerceRestMarketingHandlerESpotDataHandlerNVPAttributesContainer>;
}

