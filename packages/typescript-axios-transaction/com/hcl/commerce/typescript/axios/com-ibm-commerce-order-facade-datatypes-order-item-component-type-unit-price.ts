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

import { ComIbmCommerceOrderFacadeDatatypesOrderItemComponentTypeUnitPriceAlternativeCurrencyPrice } from './com-ibm-commerce-order-facade-datatypes-order-item-component-type-unit-price-alternative-currency-price';
import { ComIbmCommerceOrderFacadeDatatypesOrderItemComponentTypeUnitPricePrice } from './com-ibm-commerce-order-facade-datatypes-order-item-component-type-unit-price-price';
import { ComIbmCommerceOrderFacadeDatatypesOrderItemComponentTypeUnitPriceQuantity } from './com-ibm-commerce-order-facade-datatypes-order-item-component-type-unit-price-quantity';

/**
 * 
 * @export
 * @interface ComIbmCommerceOrderFacadeDatatypesOrderItemComponentTypeUnitPrice
 */
export interface ComIbmCommerceOrderFacadeDatatypesOrderItemComponentTypeUnitPrice {
    /**
     * 
     * @type {ComIbmCommerceOrderFacadeDatatypesOrderItemComponentTypeUnitPricePrice}
     * @memberof ComIbmCommerceOrderFacadeDatatypesOrderItemComponentTypeUnitPrice
     */
    price?: ComIbmCommerceOrderFacadeDatatypesOrderItemComponentTypeUnitPricePrice;
    /**
     * 
     * @type {ComIbmCommerceOrderFacadeDatatypesOrderItemComponentTypeUnitPriceQuantity}
     * @memberof ComIbmCommerceOrderFacadeDatatypesOrderItemComponentTypeUnitPrice
     */
    quantity?: ComIbmCommerceOrderFacadeDatatypesOrderItemComponentTypeUnitPriceQuantity;
    /**
     * 
     * @type {Array<ComIbmCommerceOrderFacadeDatatypesOrderItemComponentTypeUnitPriceAlternativeCurrencyPrice>}
     * @memberof ComIbmCommerceOrderFacadeDatatypesOrderItemComponentTypeUnitPrice
     */
    alternativeCurrencyPrice?: Array<ComIbmCommerceOrderFacadeDatatypesOrderItemComponentTypeUnitPriceAlternativeCurrencyPrice>;
}


