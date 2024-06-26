/* tslint:disable */
/* eslint-disable */
/**
 * API definitions for Seller organization requests approval service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 * (C) Copyright HCL Technologies Limited 2021
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Comment } from './comment';

/**
 * 
 * @export
 * @interface CommentCollection
 */
export interface CommentCollection {
    /**
     * 
     * @type {number}
     * @memberof CommentCollection
     */
    count?: number;
    /**
     * 
     * @type {Array<Comment>}
     * @memberof CommentCollection
     */
    items?: Array<Comment>;
}


