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
 * Request of BuyerRegistrationAddCmd.
 * @export
 * @interface ComIbmCommerceRestMemberHandlerOrganizationHandlerBuyerRegistrationAddRequest
 */
export interface ComIbmCommerceRestMemberHandlerOrganizationHandlerBuyerRegistrationAddRequest {
    /**
     * The name of the new buyer organization to register.
     * @type {Array<string>}
     * @memberof ComIbmCommerceRestMemberHandlerOrganizationHandlerBuyerRegistrationAddRequest
     */
    org_orgEntityName: Array<string>;
    /**
     * The logonId for the buyer organization\'s initial administrator.
     * @type {Array<string>}
     * @memberof ComIbmCommerceRestMemberHandlerOrganizationHandlerBuyerRegistrationAddRequest
     */
    usr_logonId: Array<string>;
    /**
     * The logonId for the password of buyer organization\'s initial administrator\'s.
     * @type {Array<string>}
     * @memberof ComIbmCommerceRestMemberHandlerOrganizationHandlerBuyerRegistrationAddRequest
     */
    usr_logonPassword: Array<string>;
    /**
     * The logonId for the password of buyer organization\'s initial administrator\'s entered a second time.
     * @type {Array<string>}
     * @memberof ComIbmCommerceRestMemberHandlerOrganizationHandlerBuyerRegistrationAddRequest
     */
    usr_logonPasswordVerify: Array<string>;
}


