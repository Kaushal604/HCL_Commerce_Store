/* tslint:disable */
/* eslint-disable */
/**
 * HCL Commerce Services - Account and Contract
 * These services provide APIs to manage accounts and contracts.  a contract is an agreement that represents the terms and conditions that apply to a transaction. An account is a relationship between the merchant and the financial institution that processes transactions for that merchant.
 *
 * The version of the OpenAPI document: 9.1.6
 * 
 * (C) Copyright HCL Technologies Limited 2021
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../../../../../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../../../../../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../../../../../base';
// @ts-ignore
import { TokenusageTokenusage } from '../../../../../com/hcl/commerce/typescript/axios';
/**
 * TokenUsageApi - axios parameter creator
 * @export
 */
export const TokenUsageApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Gets the feature version data.
         * @summary Get feature version data
         * @param {string} storeId The store identifier.
         * @param {string} q The query name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tokenUsageFindByAll: async (storeId: string, q: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'storeId' is not null or undefined
            assertParamExists('tokenUsageFindByAll', 'storeId', storeId)
            // verify required parameter 'q' is not null or undefined
            assertParamExists('tokenUsageFindByAll', 'q', q)
            const localVarPath = `/store/{storeId}/seo/tokenusage`
                .replace(`{${"storeId"}}`, String(storeId));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (q !== undefined) {
                localVarQueryParameter['q'] = q;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TokenUsageApi - functional programming interface
 * @export
 */
export const TokenUsageApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TokenUsageApiAxiosParamCreator(configuration)
    return {
        /**
         * Gets the feature version data.
         * @summary Get feature version data
         * @param {string} storeId The store identifier.
         * @param {string} q The query name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tokenUsageFindByAll(storeId: string, q: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TokenusageTokenusage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tokenUsageFindByAll(storeId, q, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TokenUsageApi - factory interface
 * @export
 */
export const TokenUsageApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TokenUsageApiFp(configuration)
    return {
        /**
         * Gets the feature version data.
         * @summary Get feature version data
         * @param {string} storeId The store identifier.
         * @param {string} q The query name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tokenUsageFindByAll(storeId: string, q: string, options?: any): AxiosPromise<TokenusageTokenusage> {
            return localVarFp.tokenUsageFindByAll(storeId, q, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TokenUsageApi - object-oriented interface
 * @export
 * @class TokenUsageApi
 * @extends {BaseAPI}
 */
export class TokenUsageApi extends BaseAPI {
    /**
     * Gets the feature version data.
     * @summary Get feature version data
     * @param {string} storeId The store identifier.
     * @param {string} q The query name.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenUsageApi
     */
    public tokenUsageFindByAll(storeId: string, q: string, options?: any) {
        return TokenUsageApiFp(this.configuration).tokenUsageFindByAll(storeId, q, options).then((request) => request(this.axios, this.basePath));
    }
}
