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

import { LayoutLayoutItemWidgetExtendedDataAttributes } from './layout-layout-item-widget-extended-data-attributes';
import { LayoutLayoutItemWidgetExtendedDataUserDataField } from './layout-layout-item-widget-extended-data-user-data-field';

/**
 * 
 * @export
 * @interface LayoutLayoutItemWidgetExtendedData
 */
export interface LayoutLayoutItemWidgetExtendedData {
    /**
     * 
     * @type {number}
     * @memberof LayoutLayoutItemWidgetExtendedData
     */
    sequence?: number;
    /**
     * 
     * @type {string}
     * @memberof LayoutLayoutItemWidgetExtendedData
     */
    dataType?: string;
    /**
     * 
     * @type {string}
     * @memberof LayoutLayoutItemWidgetExtendedData
     */
    storeId?: string;
    /**
     * 
     * @type {string}
     * @memberof LayoutLayoutItemWidgetExtendedData
     */
    uniqueId?: string;
    /**
     * 
     * @type {Array<LayoutLayoutItemWidgetExtendedDataAttributes>}
     * @memberof LayoutLayoutItemWidgetExtendedData
     */
    attributes?: Array<LayoutLayoutItemWidgetExtendedDataAttributes>;
    /**
     * 
     * @type {Array<LayoutLayoutItemWidgetExtendedDataUserDataField>}
     * @memberof LayoutLayoutItemWidgetExtendedData
     */
    userDataField?: Array<LayoutLayoutItemWidgetExtendedDataUserDataField>;
}


