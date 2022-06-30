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

import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../../../../../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../../../../../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../../../../../base';
// @ts-ignore
import { CategoryIBMAdminDetailsBreadcrumb } from '../../../../../com/hcl/commerce/typescript/axios';
/**
 * CategoryApi - axios parameter creator
 * @export
 */
export const CategoryApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Gets catalogs by search term.
         * @summary Get catalogs by search term
         * @param {string} storeId The store identifier.
         * @param {string} searchTerm The term user is searching for.
         * @param {string} [langId] Language identifier. If not specified, the \&quot;locale\&quot; parameter is used. If \&quot;locale\&quot; is not specified, then the store default language is used.
         * @param {string} [catalogId] The unique ID of the catalog to search the categories under.
         * @param {string} [profileName] Profile name. Profiles determine the subset of data returned by a query.
         * @param {number} [pageNumber] Page number. Valid values are positive integers starting at 1. Use pageNumber with pageSize.
         * @param {number} [pageSize] Page size. Used to limit the amount of data returned by a query. Valid values are integers starting with 1. Use pageSize with pageNumber.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoryFindBySearchTerm: async (storeId: string, searchTerm: string, langId?: string, catalogId?: string, profileName?: string, pageNumber?: number, pageSize?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'storeId' is not null or undefined
            assertParamExists('categoryFindBySearchTerm', 'storeId', storeId)
            // verify required parameter 'searchTerm' is not null or undefined
            assertParamExists('categoryFindBySearchTerm', 'searchTerm', searchTerm)
            const localVarPath = `/store/{storeId}/category/bySearchTerm/{searchTerm}`
                .replace(`{${"storeId"}}`, String(storeId))
                .replace(`{${"searchTerm"}}`, String(searchTerm));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (langId !== undefined) {
                localVarQueryParameter['langId'] = langId;
            }

            if (catalogId !== undefined) {
                localVarQueryParameter['catalogId'] = catalogId;
            }

            if (profileName !== undefined) {
                localVarQueryParameter['profileName'] = profileName;
            }

            if (pageNumber !== undefined) {
                localVarQueryParameter['pageNumber'] = pageNumber;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
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
 * CategoryApi - functional programming interface
 * @export
 */
export const CategoryApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CategoryApiAxiosParamCreator(configuration)
    return {
        /**
         * Gets catalogs by search term.
         * @summary Get catalogs by search term
         * @param {string} storeId The store identifier.
         * @param {string} searchTerm The term user is searching for.
         * @param {string} [langId] Language identifier. If not specified, the \&quot;locale\&quot; parameter is used. If \&quot;locale\&quot; is not specified, then the store default language is used.
         * @param {string} [catalogId] The unique ID of the catalog to search the categories under.
         * @param {string} [profileName] Profile name. Profiles determine the subset of data returned by a query.
         * @param {number} [pageNumber] Page number. Valid values are positive integers starting at 1. Use pageNumber with pageSize.
         * @param {number} [pageSize] Page size. Used to limit the amount of data returned by a query. Valid values are integers starting with 1. Use pageSize with pageNumber.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async categoryFindBySearchTerm(storeId: string, searchTerm: string, langId?: string, catalogId?: string, profileName?: string, pageNumber?: number, pageSize?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CategoryIBMAdminDetailsBreadcrumb>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.categoryFindBySearchTerm(storeId, searchTerm, langId, catalogId, profileName, pageNumber, pageSize, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CategoryApi - factory interface
 * @export
 */
export const CategoryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CategoryApiFp(configuration)
    return {
        /**
         * Gets catalogs by search term.
         * @summary Get catalogs by search term
         * @param {string} storeId The store identifier.
         * @param {string} searchTerm The term user is searching for.
         * @param {string} [langId] Language identifier. If not specified, the \&quot;locale\&quot; parameter is used. If \&quot;locale\&quot; is not specified, then the store default language is used.
         * @param {string} [catalogId] The unique ID of the catalog to search the categories under.
         * @param {string} [profileName] Profile name. Profiles determine the subset of data returned by a query.
         * @param {number} [pageNumber] Page number. Valid values are positive integers starting at 1. Use pageNumber with pageSize.
         * @param {number} [pageSize] Page size. Used to limit the amount of data returned by a query. Valid values are integers starting with 1. Use pageSize with pageNumber.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoryFindBySearchTerm(storeId: string, searchTerm: string, langId?: string, catalogId?: string, profileName?: string, pageNumber?: number, pageSize?: number, options?: any): AxiosPromise<CategoryIBMAdminDetailsBreadcrumb> {
            return localVarFp.categoryFindBySearchTerm(storeId, searchTerm, langId, catalogId, profileName, pageNumber, pageSize, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CategoryApi - object-oriented interface
 * @export
 * @class CategoryApi
 * @extends {BaseAPI}
 */
export class CategoryApi extends BaseAPI {
    /**
     * Gets catalogs by search term.
     * @summary Get catalogs by search term
     * @param {string} storeId The store identifier.
     * @param {string} searchTerm The term user is searching for.
     * @param {string} [langId] Language identifier. If not specified, the \&quot;locale\&quot; parameter is used. If \&quot;locale\&quot; is not specified, then the store default language is used.
     * @param {string} [catalogId] The unique ID of the catalog to search the categories under.
     * @param {string} [profileName] Profile name. Profiles determine the subset of data returned by a query.
     * @param {number} [pageNumber] Page number. Valid values are positive integers starting at 1. Use pageNumber with pageSize.
     * @param {number} [pageSize] Page size. Used to limit the amount of data returned by a query. Valid values are integers starting with 1. Use pageSize with pageNumber.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoryApi
     */
    public categoryFindBySearchTerm(storeId: string, searchTerm: string, langId?: string, catalogId?: string, profileName?: string, pageNumber?: number, pageSize?: number, options?: any) {
        return CategoryApiFp(this.configuration).categoryFindBySearchTerm(storeId, searchTerm, langId, catalogId, profileName, pageNumber, pageSize, options).then((request) => request(this.axios, this.basePath));
    }
}