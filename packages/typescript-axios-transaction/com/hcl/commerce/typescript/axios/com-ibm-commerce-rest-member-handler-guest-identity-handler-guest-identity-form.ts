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
 * Information needed to creating guest identity.
 * @export
 * @interface ComIbmCommerceRestMemberHandlerGuestIdentityHandlerGuestIdentityForm
 */
export interface ComIbmCommerceRestMemberHandlerGuestIdentityHandlerGuestIdentityForm {
    /**
     * The version of the privacy notice. For example \'1.0\'.
     * @type {string}
     * @memberof ComIbmCommerceRestMemberHandlerGuestIdentityHandlerGuestIdentityForm
     */
    privacyNoticeVersion?: string;
    /**
     * The marketing tracking consent. 0 means opt-out, 1 means opt-in.
     * @type {string}
     * @memberof ComIbmCommerceRestMemberHandlerGuestIdentityHandlerGuestIdentityForm
     */
    marketingTrackingConsent?: string;
}


