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
 * 
 * @export
 * @interface ComIbmCommerceRestOrderHandlerCartHandlerDeleteOrderItemRequest
 */
export interface ComIbmCommerceRestOrderHandlerCartHandlerDeleteOrderItemRequest {
    /**
     * The order ID.
     * @type {string}
     * @memberof ComIbmCommerceRestOrderHandlerCartHandlerDeleteOrderItemRequest
     */
    orderId?: string;
    /**
     * The identifier for the type of calculation to perform on the order.
     * @type {string}
     * @memberof ComIbmCommerceRestOrderHandlerCartHandlerDeleteOrderItemRequest
     */
    calculationUsage?: string;
    /**
     * The order item identifier.
     * @type {string}
     * @memberof ComIbmCommerceRestOrderHandlerCartHandlerDeleteOrderItemRequest
     */
    orderItemId: string;
    /**
     * Specifies whether OrderCalculateCmd is called to calculate the charges for the order. 0 = do not call OrderCalculateCmd, 1 = call OrderCalculateCmd.
     * @type {string}
     * @memberof ComIbmCommerceRestOrderHandlerCartHandlerDeleteOrderItemRequest
     */
    calculateOrder?: string;
    /**
     * The catalog entry ID of the item to delete from the order.
     * @type {string}
     * @memberof ComIbmCommerceRestOrderHandlerCartHandlerDeleteOrderItemRequest
     */
    catEntryId?: string;
    /**
     * Specifies the name-value pairs to add to the redirection URL. The values of the added name-value pairs are the reference numbers of the input orders.
     * @type {string}
     * @memberof ComIbmCommerceRestOrderHandlerCartHandlerDeleteOrderItemRequest
     */
    outOrderName?: string;
    /**
     * A list of order items that is to check by the CheckInventory task command.
     * @type {string}
     * @memberof ComIbmCommerceRestOrderHandlerCartHandlerDeleteOrderItemRequest
     */
    check?: string;
}

