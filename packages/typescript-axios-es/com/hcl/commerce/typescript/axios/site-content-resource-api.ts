/* tslint:disable */
/* eslint-disable */
/**
 * HCL Commerce Services - Query Service
 * Query Service Api Documentation
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
import { CategorySuggestion } from '../../../../../com/hcl/commerce/typescript/axios';
// @ts-ignore
import { CommonSuggestions } from '../../../../../com/hcl/commerce/typescript/axios';
// @ts-ignore
import { KeywordSuggestion } from '../../../../../com/hcl/commerce/typescript/axios';
// @ts-ignore
import { ProductSuggestion } from '../../../../../com/hcl/commerce/typescript/axios';
/**
 * SiteContentResourceApi - axios parameter creator
 * @export
 */
export const SiteContentResourceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Provides suggestions with type-ahead for search result page.
         * @param {string} storeId 
         * @param {number} [limit] 
         * @param {string} [contractId] 
         * @param {string} [langId] 
         * @param {boolean} [termsSort] 
         * @param {string} [catalogId] 
         * @param {string} [profileName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findBrandSuggestions: async (storeId: string, limit?: number, contractId?: string, langId?: string, termsSort?: boolean, catalogId?: string, profileName?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'storeId' is not null or undefined
            assertParamExists('findBrandSuggestions', 'storeId', storeId)
            const localVarPath = `/store/{storeId}/sitecontent/brandSuggestions`
                .replace(`{${"storeId"}}`, encodeURIComponent(String(storeId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (contractId !== undefined) {
                localVarQueryParameter['contractId'] = contractId;
            }

            if (langId !== undefined) {
                localVarQueryParameter['langId'] = langId;
            }

            if (termsSort !== undefined) {
                localVarQueryParameter['termsSort'] = termsSort;
            }

            if (catalogId !== undefined) {
                localVarQueryParameter['catalogId'] = catalogId;
            }

            if (profileName !== undefined) {
                localVarQueryParameter['profileName'] = profileName;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Provides suggestions with type-ahead for search result page.
         * @param {string} storeId 
         * @param {number} [limit] 
         * @param {number} [count] 
         * @param {string} [contractId] 
         * @param {string} [langId] 
         * @param {boolean} [termsSort] 
         * @param {string} [catalogId] 
         * @param {string} [profileName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findCategorySuggestions: async (storeId: string, limit?: number, count?: number, contractId?: string, langId?: string, termsSort?: boolean, catalogId?: string, profileName?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'storeId' is not null or undefined
            assertParamExists('findCategorySuggestions', 'storeId', storeId)
            const localVarPath = `/store/{storeId}/sitecontent/categorySuggestions`
                .replace(`{${"storeId"}}`, encodeURIComponent(String(storeId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (contractId !== undefined) {
                localVarQueryParameter['contractId'] = contractId;
            }

            if (langId !== undefined) {
                localVarQueryParameter['langId'] = langId;
            }

            if (termsSort !== undefined) {
                localVarQueryParameter['termsSort'] = termsSort;
            }

            if (catalogId !== undefined) {
                localVarQueryParameter['catalogId'] = catalogId;
            }

            if (profileName !== undefined) {
                localVarQueryParameter['profileName'] = profileName;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Provides keyword suggestions with type-ahead for search result page based on a term.
         * @param {string} storeId 
         * @param {string} term 
         * @param {string} [limit] 
         * @param {string} [contractId] 
         * @param {string} [langId] 
         * @param {boolean} [termsSort] 
         * @param {string} [catalogId] 
         * @param {string} [profileName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findKeywordSuggestionsByTerm: async (storeId: string, term: string, limit?: string, contractId?: string, langId?: string, termsSort?: boolean, catalogId?: string, profileName?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'storeId' is not null or undefined
            assertParamExists('findKeywordSuggestionsByTerm', 'storeId', storeId)
            // verify required parameter 'term' is not null or undefined
            assertParamExists('findKeywordSuggestionsByTerm', 'term', term)
            const localVarPath = `/store/{storeId}/sitecontent/keywordSuggestionsByTerm/{term}`
                .replace(`{${"storeId"}}`, encodeURIComponent(String(storeId)))
                .replace(`{${"term"}}`, encodeURIComponent(String(term)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (contractId !== undefined) {
                localVarQueryParameter['contractId'] = contractId;
            }

            if (langId !== undefined) {
                localVarQueryParameter['langId'] = langId;
            }

            if (termsSort !== undefined) {
                localVarQueryParameter['termsSort'] = termsSort;
            }

            if (catalogId !== undefined) {
                localVarQueryParameter['catalogId'] = catalogId;
            }

            if (profileName !== undefined) {
                localVarQueryParameter['profileName'] = profileName;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Provides suggestions with type-ahead for search result page.
         * @param {string} storeId 
         * @param {string} searchTerm 
         * @param {number} [pageSize] 
         * @param {number} [pageNumber] 
         * @param {number} [searchType] 
         * @param {boolean} [term] 
         * @param {string} [contractId] 
         * @param {string} [langId] 
         * @param {boolean} [termsSort] 
         * @param {string} [catalogId] 
         * @param {boolean} [checkEntitlement] 
         * @param {string} [profileName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findProductSuggestionsBySearchTerm: async (storeId: string, searchTerm: string, pageSize?: number, pageNumber?: number, searchType?: number, term?: boolean, contractId?: string, langId?: string, termsSort?: boolean, catalogId?: string, checkEntitlement?: boolean, profileName?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'storeId' is not null or undefined
            assertParamExists('findProductSuggestionsBySearchTerm', 'storeId', storeId)
            // verify required parameter 'searchTerm' is not null or undefined
            assertParamExists('findProductSuggestionsBySearchTerm', 'searchTerm', searchTerm)
            const localVarPath = `/store/{storeId}/sitecontent/productSuggestionsBySearchTerm/{searchTerm}`
                .replace(`{${"storeId"}}`, encodeURIComponent(String(storeId)))
                .replace(`{${"searchTerm"}}`, encodeURIComponent(String(searchTerm)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }

            if (pageNumber !== undefined) {
                localVarQueryParameter['pageNumber'] = pageNumber;
            }

            if (searchType !== undefined) {
                localVarQueryParameter['searchType'] = searchType;
            }

            if (term !== undefined) {
                localVarQueryParameter['term'] = term;
            }

            if (contractId !== undefined) {
                localVarQueryParameter['contractId'] = contractId;
            }

            if (langId !== undefined) {
                localVarQueryParameter['langId'] = langId;
            }

            if (termsSort !== undefined) {
                localVarQueryParameter['termsSort'] = termsSort;
            }

            if (catalogId !== undefined) {
                localVarQueryParameter['catalogId'] = catalogId;
            }

            if (checkEntitlement !== undefined) {
                localVarQueryParameter['checkEntitlement'] = checkEntitlement;
            }

            if (profileName !== undefined) {
                localVarQueryParameter['profileName'] = profileName;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Provides suggestions with type-ahead for search result page.
         * @param {string} storeId 
         * @param {string} [suggestType] 
         * @param {string} [term] 
         * @param {string} [limit] 
         * @param {number} [count] 
         * @param {string} [contractId] 
         * @param {string} [langId] 
         * @param {boolean} [termsSort] 
         * @param {string} [catalogId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findSuggestions: async (storeId: string, suggestType?: string, term?: string, limit?: string, count?: number, contractId?: string, langId?: string, termsSort?: boolean, catalogId?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'storeId' is not null or undefined
            assertParamExists('findSuggestions', 'storeId', storeId)
            const localVarPath = `/store/{storeId}/sitecontent/suggestions`
                .replace(`{${"storeId"}}`, encodeURIComponent(String(storeId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (suggestType !== undefined) {
                localVarQueryParameter['suggestType'] = suggestType;
            }

            if (term !== undefined) {
                localVarQueryParameter['term'] = term;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (contractId !== undefined) {
                localVarQueryParameter['contractId'] = contractId;
            }

            if (langId !== undefined) {
                localVarQueryParameter['langId'] = langId;
            }

            if (termsSort !== undefined) {
                localVarQueryParameter['termsSort'] = termsSort;
            }

            if (catalogId !== undefined) {
                localVarQueryParameter['catalogId'] = catalogId;
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
 * SiteContentResourceApi - functional programming interface
 * @export
 */
export const SiteContentResourceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SiteContentResourceApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Provides suggestions with type-ahead for search result page.
         * @param {string} storeId 
         * @param {number} [limit] 
         * @param {string} [contractId] 
         * @param {string} [langId] 
         * @param {boolean} [termsSort] 
         * @param {string} [catalogId] 
         * @param {string} [profileName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findBrandSuggestions(storeId: string, limit?: number, contractId?: string, langId?: string, termsSort?: boolean, catalogId?: string, profileName?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CategorySuggestion>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findBrandSuggestions(storeId, limit, contractId, langId, termsSort, catalogId, profileName, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Provides suggestions with type-ahead for search result page.
         * @param {string} storeId 
         * @param {number} [limit] 
         * @param {number} [count] 
         * @param {string} [contractId] 
         * @param {string} [langId] 
         * @param {boolean} [termsSort] 
         * @param {string} [catalogId] 
         * @param {string} [profileName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findCategorySuggestions(storeId: string, limit?: number, count?: number, contractId?: string, langId?: string, termsSort?: boolean, catalogId?: string, profileName?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CategorySuggestion>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findCategorySuggestions(storeId, limit, count, contractId, langId, termsSort, catalogId, profileName, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Provides keyword suggestions with type-ahead for search result page based on a term.
         * @param {string} storeId 
         * @param {string} term 
         * @param {string} [limit] 
         * @param {string} [contractId] 
         * @param {string} [langId] 
         * @param {boolean} [termsSort] 
         * @param {string} [catalogId] 
         * @param {string} [profileName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findKeywordSuggestionsByTerm(storeId: string, term: string, limit?: string, contractId?: string, langId?: string, termsSort?: boolean, catalogId?: string, profileName?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<KeywordSuggestion>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findKeywordSuggestionsByTerm(storeId, term, limit, contractId, langId, termsSort, catalogId, profileName, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Provides suggestions with type-ahead for search result page.
         * @param {string} storeId 
         * @param {string} searchTerm 
         * @param {number} [pageSize] 
         * @param {number} [pageNumber] 
         * @param {number} [searchType] 
         * @param {boolean} [term] 
         * @param {string} [contractId] 
         * @param {string} [langId] 
         * @param {boolean} [termsSort] 
         * @param {string} [catalogId] 
         * @param {boolean} [checkEntitlement] 
         * @param {string} [profileName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findProductSuggestionsBySearchTerm(storeId: string, searchTerm: string, pageSize?: number, pageNumber?: number, searchType?: number, term?: boolean, contractId?: string, langId?: string, termsSort?: boolean, catalogId?: string, checkEntitlement?: boolean, profileName?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProductSuggestion>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findProductSuggestionsBySearchTerm(storeId, searchTerm, pageSize, pageNumber, searchType, term, contractId, langId, termsSort, catalogId, checkEntitlement, profileName, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Provides suggestions with type-ahead for search result page.
         * @param {string} storeId 
         * @param {string} [suggestType] 
         * @param {string} [term] 
         * @param {string} [limit] 
         * @param {number} [count] 
         * @param {string} [contractId] 
         * @param {string} [langId] 
         * @param {boolean} [termsSort] 
         * @param {string} [catalogId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findSuggestions(storeId: string, suggestType?: string, term?: string, limit?: string, count?: number, contractId?: string, langId?: string, termsSort?: boolean, catalogId?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CommonSuggestions>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findSuggestions(storeId, suggestType, term, limit, count, contractId, langId, termsSort, catalogId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SiteContentResourceApi - factory interface
 * @export
 */
export const SiteContentResourceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SiteContentResourceApiFp(configuration)
    return {
        /**
         * 
         * @summary Provides suggestions with type-ahead for search result page.
         * @param {string} storeId 
         * @param {number} [limit] 
         * @param {string} [contractId] 
         * @param {string} [langId] 
         * @param {boolean} [termsSort] 
         * @param {string} [catalogId] 
         * @param {string} [profileName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findBrandSuggestions(storeId: string, limit?: number, contractId?: string, langId?: string, termsSort?: boolean, catalogId?: string, profileName?: string, options?: any): AxiosPromise<CategorySuggestion> {
            return localVarFp.findBrandSuggestions(storeId, limit, contractId, langId, termsSort, catalogId, profileName, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Provides suggestions with type-ahead for search result page.
         * @param {string} storeId 
         * @param {number} [limit] 
         * @param {number} [count] 
         * @param {string} [contractId] 
         * @param {string} [langId] 
         * @param {boolean} [termsSort] 
         * @param {string} [catalogId] 
         * @param {string} [profileName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findCategorySuggestions(storeId: string, limit?: number, count?: number, contractId?: string, langId?: string, termsSort?: boolean, catalogId?: string, profileName?: string, options?: any): AxiosPromise<CategorySuggestion> {
            return localVarFp.findCategorySuggestions(storeId, limit, count, contractId, langId, termsSort, catalogId, profileName, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Provides keyword suggestions with type-ahead for search result page based on a term.
         * @param {string} storeId 
         * @param {string} term 
         * @param {string} [limit] 
         * @param {string} [contractId] 
         * @param {string} [langId] 
         * @param {boolean} [termsSort] 
         * @param {string} [catalogId] 
         * @param {string} [profileName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findKeywordSuggestionsByTerm(storeId: string, term: string, limit?: string, contractId?: string, langId?: string, termsSort?: boolean, catalogId?: string, profileName?: string, options?: any): AxiosPromise<KeywordSuggestion> {
            return localVarFp.findKeywordSuggestionsByTerm(storeId, term, limit, contractId, langId, termsSort, catalogId, profileName, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Provides suggestions with type-ahead for search result page.
         * @param {string} storeId 
         * @param {string} searchTerm 
         * @param {number} [pageSize] 
         * @param {number} [pageNumber] 
         * @param {number} [searchType] 
         * @param {boolean} [term] 
         * @param {string} [contractId] 
         * @param {string} [langId] 
         * @param {boolean} [termsSort] 
         * @param {string} [catalogId] 
         * @param {boolean} [checkEntitlement] 
         * @param {string} [profileName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findProductSuggestionsBySearchTerm(storeId: string, searchTerm: string, pageSize?: number, pageNumber?: number, searchType?: number, term?: boolean, contractId?: string, langId?: string, termsSort?: boolean, catalogId?: string, checkEntitlement?: boolean, profileName?: string, options?: any): AxiosPromise<ProductSuggestion> {
            return localVarFp.findProductSuggestionsBySearchTerm(storeId, searchTerm, pageSize, pageNumber, searchType, term, contractId, langId, termsSort, catalogId, checkEntitlement, profileName, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Provides suggestions with type-ahead for search result page.
         * @param {string} storeId 
         * @param {string} [suggestType] 
         * @param {string} [term] 
         * @param {string} [limit] 
         * @param {number} [count] 
         * @param {string} [contractId] 
         * @param {string} [langId] 
         * @param {boolean} [termsSort] 
         * @param {string} [catalogId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findSuggestions(storeId: string, suggestType?: string, term?: string, limit?: string, count?: number, contractId?: string, langId?: string, termsSort?: boolean, catalogId?: string, options?: any): AxiosPromise<CommonSuggestions> {
            return localVarFp.findSuggestions(storeId, suggestType, term, limit, count, contractId, langId, termsSort, catalogId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SiteContentResourceApi - object-oriented interface
 * @export
 * @class SiteContentResourceApi
 * @extends {BaseAPI}
 */
export class SiteContentResourceApi extends BaseAPI {
    /**
     * 
     * @summary Provides suggestions with type-ahead for search result page.
     * @param {string} storeId 
     * @param {number} [limit] 
     * @param {string} [contractId] 
     * @param {string} [langId] 
     * @param {boolean} [termsSort] 
     * @param {string} [catalogId] 
     * @param {string} [profileName] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SiteContentResourceApi
     */
    public findBrandSuggestions(storeId: string, limit?: number, contractId?: string, langId?: string, termsSort?: boolean, catalogId?: string, profileName?: string, options?: any) {
        return SiteContentResourceApiFp(this.configuration).findBrandSuggestions(storeId, limit, contractId, langId, termsSort, catalogId, profileName, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Provides suggestions with type-ahead for search result page.
     * @param {string} storeId 
     * @param {number} [limit] 
     * @param {number} [count] 
     * @param {string} [contractId] 
     * @param {string} [langId] 
     * @param {boolean} [termsSort] 
     * @param {string} [catalogId] 
     * @param {string} [profileName] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SiteContentResourceApi
     */
    public findCategorySuggestions(storeId: string, limit?: number, count?: number, contractId?: string, langId?: string, termsSort?: boolean, catalogId?: string, profileName?: string, options?: any) {
        return SiteContentResourceApiFp(this.configuration).findCategorySuggestions(storeId, limit, count, contractId, langId, termsSort, catalogId, profileName, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Provides keyword suggestions with type-ahead for search result page based on a term.
     * @param {string} storeId 
     * @param {string} term 
     * @param {string} [limit] 
     * @param {string} [contractId] 
     * @param {string} [langId] 
     * @param {boolean} [termsSort] 
     * @param {string} [catalogId] 
     * @param {string} [profileName] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SiteContentResourceApi
     */
    public findKeywordSuggestionsByTerm(storeId: string, term: string, limit?: string, contractId?: string, langId?: string, termsSort?: boolean, catalogId?: string, profileName?: string, options?: any) {
        return SiteContentResourceApiFp(this.configuration).findKeywordSuggestionsByTerm(storeId, term, limit, contractId, langId, termsSort, catalogId, profileName, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Provides suggestions with type-ahead for search result page.
     * @param {string} storeId 
     * @param {string} searchTerm 
     * @param {number} [pageSize] 
     * @param {number} [pageNumber] 
     * @param {number} [searchType] 
     * @param {boolean} [term] 
     * @param {string} [contractId] 
     * @param {string} [langId] 
     * @param {boolean} [termsSort] 
     * @param {string} [catalogId] 
     * @param {boolean} [checkEntitlement] 
     * @param {string} [profileName] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SiteContentResourceApi
     */
    public findProductSuggestionsBySearchTerm(storeId: string, searchTerm: string, pageSize?: number, pageNumber?: number, searchType?: number, term?: boolean, contractId?: string, langId?: string, termsSort?: boolean, catalogId?: string, checkEntitlement?: boolean, profileName?: string, options?: any) {
        return SiteContentResourceApiFp(this.configuration).findProductSuggestionsBySearchTerm(storeId, searchTerm, pageSize, pageNumber, searchType, term, contractId, langId, termsSort, catalogId, checkEntitlement, profileName, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Provides suggestions with type-ahead for search result page.
     * @param {string} storeId 
     * @param {string} [suggestType] 
     * @param {string} [term] 
     * @param {string} [limit] 
     * @param {number} [count] 
     * @param {string} [contractId] 
     * @param {string} [langId] 
     * @param {boolean} [termsSort] 
     * @param {string} [catalogId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SiteContentResourceApi
     */
    public findSuggestions(storeId: string, suggestType?: string, term?: string, limit?: string, count?: number, contractId?: string, langId?: string, termsSort?: boolean, catalogId?: string, options?: any) {
        return SiteContentResourceApiFp(this.configuration).findSuggestions(storeId, suggestType, term, limit, count, contractId, langId, termsSort, catalogId, options).then((request) => request(this.axios, this.basePath));
    }
}
