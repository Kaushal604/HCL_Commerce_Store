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

import { CartCouponCodeUserDataField } from './cart-coupon-code-user-data-field';
import { ComIbmCommerceFoundationCommonDatatypesPromotionIdentifierType } from './com-ibm-commerce-foundation-common-datatypes-promotion-identifier-type';
import { ComIbmCommerceOrderFacadeDatatypesCouponDescriptionType } from './com-ibm-commerce-order-facade-datatypes-coupon-description-type';

/**
 * 
 * @export
 * @interface CartCouponCode
 */
export interface CartCouponCode {
    /**
     * 
     * @type {string}
     * @memberof CartCouponCode
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof CartCouponCode
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof CartCouponCode
     */
    couponId?: string;
    /**
     * 
     * @type {string}
     * @memberof CartCouponCode
     */
    expirationDateTime?: string;
    /**
     * 
     * @type {string}
     * @memberof CartCouponCode
     */
    effectiveDateTime?: string;
    /**
     * 
     * @type {ComIbmCommerceFoundationCommonDatatypesPromotionIdentifierType}
     * @memberof CartCouponCode
     */
    promotion?: ComIbmCommerceFoundationCommonDatatypesPromotionIdentifierType;
    /**
     * 
     * @type {Array<CartCouponCodeUserDataField>}
     * @memberof CartCouponCode
     */
    userDataField?: Array<CartCouponCodeUserDataField>;
    /**
     * 
     * @type {Array<ComIbmCommerceOrderFacadeDatatypesCouponDescriptionType>}
     * @memberof CartCouponCode
     */
    description?: Array<ComIbmCommerceOrderFacadeDatatypesCouponDescriptionType>;
}

