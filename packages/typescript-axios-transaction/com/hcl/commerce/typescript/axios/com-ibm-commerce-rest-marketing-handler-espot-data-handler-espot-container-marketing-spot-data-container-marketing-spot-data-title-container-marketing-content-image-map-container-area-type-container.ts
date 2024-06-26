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


/**
 * Structure containing the clickable area of an image map.
 * @export
 * @interface ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerMarketingSpotDataTitleContainerMarketingContentImageMapContainerAreaTypeContainer
 */
export interface ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerMarketingSpotDataTitleContainerMarketingContentImageMapContainerAreaTypeContainer {
    /**
     * Title of the area.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerMarketingSpotDataTitleContainerMarketingContentImageMapContainerAreaTypeContainer
     */
    title?: string;
    /**
     * Click action to be invoked when the area is clicked.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerMarketingSpotDataTitleContainerMarketingContentImageMapContainerAreaTypeContainer
     */
    url?: string;
    /**
     * Sequence of the area.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerMarketingSpotDataTitleContainerMarketingContentImageMapContainerAreaTypeContainer
     */
    displaySequence?: string;
    /**
     * Coordinates of the area.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerMarketingSpotDataTitleContainerMarketingContentImageMapContainerAreaTypeContainer
     */
    coordinates?: string;
    /**
     * Shape of the area. Three types of shape are supported: \"rect\" (Rectangle), \"circle\" (Circle) and \"poly\" (Polygon).
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerMarketingSpotDataTitleContainerMarketingContentImageMapContainerAreaTypeContainer
     */
    shape?: string;
    /**
     * Unique ID of the image map area.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerMarketingSpotDataTitleContainerMarketingContentImageMapContainerAreaTypeContainer
     */
    uniqueID?: string;
    /**
     * Alternate text for the area.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerMarketingSpotDataTitleContainerMarketingContentImageMapContainerAreaTypeContainer
     */
    alternateText?: string;
}


