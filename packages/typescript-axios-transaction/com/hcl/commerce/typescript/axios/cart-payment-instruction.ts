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

import { CartBillingAddress } from './cart-billing-address';
import { CartPaymentInstructionProtocolData } from './cart-payment-instruction-protocol-data';
import { CartPaymentInstructionUserDataField } from './cart-payment-instruction-user-data-field';
import { ComIbmCommerceFoundationCommonDatatypesMonetaryAmountType } from './com-ibm-commerce-foundation-common-datatypes-monetary-amount-type';

/**
 * 
 * @export
 * @interface CartPaymentInstruction
 */
export interface CartPaymentInstruction {
    /**
     * 
     * @type {string}
     * @memberof CartPaymentInstruction
     */
    paymentTermConditionId?: string;
    /**
     * 
     * @type {string}
     * @memberof CartPaymentInstruction
     */
    paymentRule?: string;
    /**
     * 
     * @type {string}
     * @memberof CartPaymentInstruction
     */
    sequenceNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof CartPaymentInstruction
     */
    piId?: string;
    /**
     * 
     * @type {string}
     * @memberof CartPaymentInstruction
     */
    piStatus?: string;
    /**
     * 
     * @type {Array<CartPaymentInstructionProtocolData>}
     * @memberof CartPaymentInstruction
     */
    protocolData?: Array<CartPaymentInstructionProtocolData>;
    /**
     * 
     * @type {ComIbmCommerceFoundationCommonDatatypesMonetaryAmountType}
     * @memberof CartPaymentInstruction
     */
    minAmount?: ComIbmCommerceFoundationCommonDatatypesMonetaryAmountType;
    /**
     * 
     * @type {string}
     * @memberof CartPaymentInstruction
     */
    refundAllowed?: string;
    /**
     * 
     * @type {string}
     * @memberof CartPaymentInstruction
     */
    piCurrency?: string;
    /**
     * 
     * @type {string}
     * @memberof CartPaymentInstruction
     */
    priority?: string;
    /**
     * 
     * @type {string}
     * @memberof CartPaymentInstruction
     */
    payMethodId?: string;
    /**
     * 
     * @type {CartBillingAddress}
     * @memberof CartPaymentInstruction
     */
    billingAddress?: CartBillingAddress;
    /**
     * 
     * @type {string}
     * @memberof CartPaymentInstruction
     */
    piDescription?: string;
    /**
     * 
     * @type {Array<CartPaymentInstructionUserDataField>}
     * @memberof CartPaymentInstruction
     */
    userDataField?: Array<CartPaymentInstructionUserDataField>;
    /**
     * 
     * @type {string}
     * @memberof CartPaymentInstruction
     */
    piLanguage?: string;
    /**
     * 
     * @type {number}
     * @memberof CartPaymentInstruction
     */
    piAmount?: number;
    /**
     * 
     * @type {ComIbmCommerceFoundationCommonDatatypesMonetaryAmountType}
     * @memberof CartPaymentInstruction
     */
    maxAmount?: ComIbmCommerceFoundationCommonDatatypesMonetaryAmountType;
}

