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

import { ComIbmCommerceGiftcenterFacadeDatatypesGiftListRegistrantTypeRegistrantAddressContactInfoIdentifierExternalIdentifierOrganizationIdentifier } from './com-ibm-commerce-giftcenter-facade-datatypes-gift-list-registrant-type-registrant-address-contact-info-identifier-external-identifier-organization-identifier';
import { ComIbmCommerceGiftcenterFacadeDatatypesGiftListRegistrantTypeRegistrantAddressContactInfoIdentifierExternalIdentifierPersonIdentifier } from './com-ibm-commerce-giftcenter-facade-datatypes-gift-list-registrant-type-registrant-address-contact-info-identifier-external-identifier-person-identifier';

/**
 * 
 * @export
 * @interface ComIbmCommerceGiftcenterFacadeDatatypesGiftListRegistrantTypeRegistrantAddressContactInfoIdentifierExternalIdentifier
 */
export interface ComIbmCommerceGiftcenterFacadeDatatypesGiftListRegistrantTypeRegistrantAddressContactInfoIdentifierExternalIdentifier {
    /**
     * 
     * @type {ComIbmCommerceGiftcenterFacadeDatatypesGiftListRegistrantTypeRegistrantAddressContactInfoIdentifierExternalIdentifierOrganizationIdentifier}
     * @memberof ComIbmCommerceGiftcenterFacadeDatatypesGiftListRegistrantTypeRegistrantAddressContactInfoIdentifierExternalIdentifier
     */
    organizationIdentifier?: ComIbmCommerceGiftcenterFacadeDatatypesGiftListRegistrantTypeRegistrantAddressContactInfoIdentifierExternalIdentifierOrganizationIdentifier;
    /**
     * 
     * @type {ComIbmCommerceGiftcenterFacadeDatatypesGiftListRegistrantTypeRegistrantAddressContactInfoIdentifierExternalIdentifierPersonIdentifier}
     * @memberof ComIbmCommerceGiftcenterFacadeDatatypesGiftListRegistrantTypeRegistrantAddressContactInfoIdentifierExternalIdentifier
     */
    personIdentifier?: ComIbmCommerceGiftcenterFacadeDatatypesGiftListRegistrantTypeRegistrantAddressContactInfoIdentifierExternalIdentifierPersonIdentifier;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceGiftcenterFacadeDatatypesGiftListRegistrantTypeRegistrantAddressContactInfoIdentifierExternalIdentifier
     */
    contactInfoNickName: string;
}

