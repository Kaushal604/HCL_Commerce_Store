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
import { WorkspaceIBMAdminAll } from '../../../../../com/hcl/commerce/typescript/axios';
/**
 * WorkspaceApi - axios parameter creator
 * @export
 */
export const WorkspaceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Change workspace status by performing an action on it.
         * @param {string} storeId the store identifier.
         * @param {string} workspaceId the workspace identifier.
         * @param {string} actionType The change status action to perform on workspace.
         * @param {string} [responseFormat] The response format. If the request has an input body, that body must also use the format specified in \&quot;responseFormat\&quot;. Valid values include �json� and �xml� without the quotes. If the responseFormat isn�t specified, the �accept� HTTP header shall be used to determine the format of the response. If the �accept� HTTP header isn�t specified as well, the default response format shall be in json.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storeStoreIdWorkspaceChangeStatusPut: async (storeId: string, workspaceId: string, actionType: string, responseFormat?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'storeId' is not null or undefined
            assertParamExists('storeStoreIdWorkspaceChangeStatusPut', 'storeId', storeId)
            // verify required parameter 'workspaceId' is not null or undefined
            assertParamExists('storeStoreIdWorkspaceChangeStatusPut', 'workspaceId', workspaceId)
            // verify required parameter 'actionType' is not null or undefined
            assertParamExists('storeStoreIdWorkspaceChangeStatusPut', 'actionType', actionType)
            const localVarPath = `/store/{storeId}/workspace/changeStatus`
                .replace(`{${"storeId"}}`, String(storeId));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (workspaceId !== undefined) {
                localVarQueryParameter['workspaceId'] = workspaceId;
            }

            if (actionType !== undefined) {
                localVarQueryParameter['actionType'] = actionType;
            }

            if (responseFormat !== undefined) {
                localVarQueryParameter['responseFormat'] = responseFormat;
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
         * @summary Create a worskpace.
         * @param {string} storeId the store identifier.
         * @param {string} name the name of the workspace.
         * @param {string} [description] the description of the workspace.
         * @param {string} [persistent] Whether the workspace is persistent.
         * @param {string} [emergencyFix] Whether the workspace is an emergency fix..
         * @param {string} [responseFormat] The response format. If the request has an input body, that body must also use the format specified in \&quot;responseFormat\&quot;. Valid values include �json� and �xml� without the quotes. If the responseFormat isn�t specified, the �accept� HTTP header shall be used to determine the format of the response. If the �accept� HTTP header isn�t specified as well, the default response format shall be in json.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storeStoreIdWorkspaceCreateWorkspacePost: async (storeId: string, name: string, description?: string, persistent?: string, emergencyFix?: string, responseFormat?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'storeId' is not null or undefined
            assertParamExists('storeStoreIdWorkspaceCreateWorkspacePost', 'storeId', storeId)
            // verify required parameter 'name' is not null or undefined
            assertParamExists('storeStoreIdWorkspaceCreateWorkspacePost', 'name', name)
            const localVarPath = `/store/{storeId}/workspace/createWorkspace`
                .replace(`{${"storeId"}}`, String(storeId));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (description !== undefined) {
                localVarQueryParameter['description'] = description;
            }

            if (persistent !== undefined) {
                localVarQueryParameter['persistent'] = persistent;
            }

            if (emergencyFix !== undefined) {
                localVarQueryParameter['emergencyFix'] = emergencyFix;
            }

            if (responseFormat !== undefined) {
                localVarQueryParameter['responseFormat'] = responseFormat;
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
         * @summary Finds workspaces by a query. See each query for details on input and output.
         * @param {string} storeId the store identifier.
         * @param {string} q the query name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storeStoreIdWorkspaceGet: async (storeId: string, q: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'storeId' is not null or undefined
            assertParamExists('storeStoreIdWorkspaceGet', 'storeId', storeId)
            // verify required parameter 'q' is not null or undefined
            assertParamExists('storeStoreIdWorkspaceGet', 'q', q)
            const localVarPath = `/store/{storeId}/workspace`
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
        /**
         * 
         * @summary Update a workspace.
         * @param {string} storeId the store identifier.
         * @param {string} name the name of the workspace.
         * @param {string} [description] the description of the workspace.
         * @param {string} [persistent] Whether the workspace is persistent.
         * @param {string} [emergencyFix] Whether the workspace is an emergency fix..
         * @param {string} [responseFormat] The response format. If the request has an input body, that body must also use the format specified in \&quot;responseFormat\&quot;. Valid values include �json� and �xml� without the quotes. If the responseFormat isn�t specified, the �accept� HTTP header shall be used to determine the format of the response. If the �accept� HTTP header isn�t specified as well, the default response format shall be in json.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storeStoreIdWorkspaceUpdateWorkspacePut: async (storeId: string, name: string, description?: string, persistent?: string, emergencyFix?: string, responseFormat?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'storeId' is not null or undefined
            assertParamExists('storeStoreIdWorkspaceUpdateWorkspacePut', 'storeId', storeId)
            // verify required parameter 'name' is not null or undefined
            assertParamExists('storeStoreIdWorkspaceUpdateWorkspacePut', 'name', name)
            const localVarPath = `/store/{storeId}/workspace/updateWorkspace`
                .replace(`{${"storeId"}}`, String(storeId));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (description !== undefined) {
                localVarQueryParameter['description'] = description;
            }

            if (persistent !== undefined) {
                localVarQueryParameter['persistent'] = persistent;
            }

            if (emergencyFix !== undefined) {
                localVarQueryParameter['emergencyFix'] = emergencyFix;
            }

            if (responseFormat !== undefined) {
                localVarQueryParameter['responseFormat'] = responseFormat;
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
         * @summary Finds a workspace by its ID.
         * @param {string} storeId the store identifier.
         * @param {string} workspaceId The workspace identifier.
         * @param {string} [profileName] Profile name. Profiles determine the subset of data to be returned by a query.
         * @param {number} [pageNumber] Page number, starting at 1. Valid values include positive integers of 1 and above. The �pageSize� must be specified for paging to work.
         * @param {number} [pageSize] Page size. Used to limit the amount of data returned by a query. Valid values include positive integers of 1 and above. The �pageNumber� must be specified for paging to work.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storeStoreIdWorkspaceWorkspaceIdWorkspaceIdGet: async (storeId: string, workspaceId: string, profileName?: string, pageNumber?: number, pageSize?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'storeId' is not null or undefined
            assertParamExists('storeStoreIdWorkspaceWorkspaceIdWorkspaceIdGet', 'storeId', storeId)
            // verify required parameter 'workspaceId' is not null or undefined
            assertParamExists('storeStoreIdWorkspaceWorkspaceIdWorkspaceIdGet', 'workspaceId', workspaceId)
            const localVarPath = `/store/{storeId}/workspace/workspaceId/{workspaceId}`
                .replace(`{${"storeId"}}`, String(storeId))
                .replace(`{${"workspaceId"}}`, String(workspaceId));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

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
 * WorkspaceApi - functional programming interface
 * @export
 */
export const WorkspaceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WorkspaceApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Change workspace status by performing an action on it.
         * @param {string} storeId the store identifier.
         * @param {string} workspaceId the workspace identifier.
         * @param {string} actionType The change status action to perform on workspace.
         * @param {string} [responseFormat] The response format. If the request has an input body, that body must also use the format specified in \&quot;responseFormat\&quot;. Valid values include �json� and �xml� without the quotes. If the responseFormat isn�t specified, the �accept� HTTP header shall be used to determine the format of the response. If the �accept� HTTP header isn�t specified as well, the default response format shall be in json.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async storeStoreIdWorkspaceChangeStatusPut(storeId: string, workspaceId: string, actionType: string, responseFormat?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.storeStoreIdWorkspaceChangeStatusPut(storeId, workspaceId, actionType, responseFormat, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Create a worskpace.
         * @param {string} storeId the store identifier.
         * @param {string} name the name of the workspace.
         * @param {string} [description] the description of the workspace.
         * @param {string} [persistent] Whether the workspace is persistent.
         * @param {string} [emergencyFix] Whether the workspace is an emergency fix..
         * @param {string} [responseFormat] The response format. If the request has an input body, that body must also use the format specified in \&quot;responseFormat\&quot;. Valid values include �json� and �xml� without the quotes. If the responseFormat isn�t specified, the �accept� HTTP header shall be used to determine the format of the response. If the �accept� HTTP header isn�t specified as well, the default response format shall be in json.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async storeStoreIdWorkspaceCreateWorkspacePost(storeId: string, name: string, description?: string, persistent?: string, emergencyFix?: string, responseFormat?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.storeStoreIdWorkspaceCreateWorkspacePost(storeId, name, description, persistent, emergencyFix, responseFormat, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Finds workspaces by a query. See each query for details on input and output.
         * @param {string} storeId the store identifier.
         * @param {string} q the query name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async storeStoreIdWorkspaceGet(storeId: string, q: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.storeStoreIdWorkspaceGet(storeId, q, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update a workspace.
         * @param {string} storeId the store identifier.
         * @param {string} name the name of the workspace.
         * @param {string} [description] the description of the workspace.
         * @param {string} [persistent] Whether the workspace is persistent.
         * @param {string} [emergencyFix] Whether the workspace is an emergency fix..
         * @param {string} [responseFormat] The response format. If the request has an input body, that body must also use the format specified in \&quot;responseFormat\&quot;. Valid values include �json� and �xml� without the quotes. If the responseFormat isn�t specified, the �accept� HTTP header shall be used to determine the format of the response. If the �accept� HTTP header isn�t specified as well, the default response format shall be in json.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async storeStoreIdWorkspaceUpdateWorkspacePut(storeId: string, name: string, description?: string, persistent?: string, emergencyFix?: string, responseFormat?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.storeStoreIdWorkspaceUpdateWorkspacePut(storeId, name, description, persistent, emergencyFix, responseFormat, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Finds a workspace by its ID.
         * @param {string} storeId the store identifier.
         * @param {string} workspaceId The workspace identifier.
         * @param {string} [profileName] Profile name. Profiles determine the subset of data to be returned by a query.
         * @param {number} [pageNumber] Page number, starting at 1. Valid values include positive integers of 1 and above. The �pageSize� must be specified for paging to work.
         * @param {number} [pageSize] Page size. Used to limit the amount of data returned by a query. Valid values include positive integers of 1 and above. The �pageNumber� must be specified for paging to work.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async storeStoreIdWorkspaceWorkspaceIdWorkspaceIdGet(storeId: string, workspaceId: string, profileName?: string, pageNumber?: number, pageSize?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkspaceIBMAdminAll>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.storeStoreIdWorkspaceWorkspaceIdWorkspaceIdGet(storeId, workspaceId, profileName, pageNumber, pageSize, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WorkspaceApi - factory interface
 * @export
 */
export const WorkspaceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WorkspaceApiFp(configuration)
    return {
        /**
         * 
         * @summary Change workspace status by performing an action on it.
         * @param {string} storeId the store identifier.
         * @param {string} workspaceId the workspace identifier.
         * @param {string} actionType The change status action to perform on workspace.
         * @param {string} [responseFormat] The response format. If the request has an input body, that body must also use the format specified in \&quot;responseFormat\&quot;. Valid values include �json� and �xml� without the quotes. If the responseFormat isn�t specified, the �accept� HTTP header shall be used to determine the format of the response. If the �accept� HTTP header isn�t specified as well, the default response format shall be in json.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storeStoreIdWorkspaceChangeStatusPut(storeId: string, workspaceId: string, actionType: string, responseFormat?: string, options?: any): AxiosPromise<void> {
            return localVarFp.storeStoreIdWorkspaceChangeStatusPut(storeId, workspaceId, actionType, responseFormat, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create a worskpace.
         * @param {string} storeId the store identifier.
         * @param {string} name the name of the workspace.
         * @param {string} [description] the description of the workspace.
         * @param {string} [persistent] Whether the workspace is persistent.
         * @param {string} [emergencyFix] Whether the workspace is an emergency fix..
         * @param {string} [responseFormat] The response format. If the request has an input body, that body must also use the format specified in \&quot;responseFormat\&quot;. Valid values include �json� and �xml� without the quotes. If the responseFormat isn�t specified, the �accept� HTTP header shall be used to determine the format of the response. If the �accept� HTTP header isn�t specified as well, the default response format shall be in json.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storeStoreIdWorkspaceCreateWorkspacePost(storeId: string, name: string, description?: string, persistent?: string, emergencyFix?: string, responseFormat?: string, options?: any): AxiosPromise<void> {
            return localVarFp.storeStoreIdWorkspaceCreateWorkspacePost(storeId, name, description, persistent, emergencyFix, responseFormat, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Finds workspaces by a query. See each query for details on input and output.
         * @param {string} storeId the store identifier.
         * @param {string} q the query name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storeStoreIdWorkspaceGet(storeId: string, q: string, options?: any): AxiosPromise<void> {
            return localVarFp.storeStoreIdWorkspaceGet(storeId, q, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update a workspace.
         * @param {string} storeId the store identifier.
         * @param {string} name the name of the workspace.
         * @param {string} [description] the description of the workspace.
         * @param {string} [persistent] Whether the workspace is persistent.
         * @param {string} [emergencyFix] Whether the workspace is an emergency fix..
         * @param {string} [responseFormat] The response format. If the request has an input body, that body must also use the format specified in \&quot;responseFormat\&quot;. Valid values include �json� and �xml� without the quotes. If the responseFormat isn�t specified, the �accept� HTTP header shall be used to determine the format of the response. If the �accept� HTTP header isn�t specified as well, the default response format shall be in json.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storeStoreIdWorkspaceUpdateWorkspacePut(storeId: string, name: string, description?: string, persistent?: string, emergencyFix?: string, responseFormat?: string, options?: any): AxiosPromise<void> {
            return localVarFp.storeStoreIdWorkspaceUpdateWorkspacePut(storeId, name, description, persistent, emergencyFix, responseFormat, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Finds a workspace by its ID.
         * @param {string} storeId the store identifier.
         * @param {string} workspaceId The workspace identifier.
         * @param {string} [profileName] Profile name. Profiles determine the subset of data to be returned by a query.
         * @param {number} [pageNumber] Page number, starting at 1. Valid values include positive integers of 1 and above. The �pageSize� must be specified for paging to work.
         * @param {number} [pageSize] Page size. Used to limit the amount of data returned by a query. Valid values include positive integers of 1 and above. The �pageNumber� must be specified for paging to work.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storeStoreIdWorkspaceWorkspaceIdWorkspaceIdGet(storeId: string, workspaceId: string, profileName?: string, pageNumber?: number, pageSize?: number, options?: any): AxiosPromise<WorkspaceIBMAdminAll> {
            return localVarFp.storeStoreIdWorkspaceWorkspaceIdWorkspaceIdGet(storeId, workspaceId, profileName, pageNumber, pageSize, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WorkspaceApi - object-oriented interface
 * @export
 * @class WorkspaceApi
 * @extends {BaseAPI}
 */
export class WorkspaceApi extends BaseAPI {
    /**
     * 
     * @summary Change workspace status by performing an action on it.
     * @param {string} storeId the store identifier.
     * @param {string} workspaceId the workspace identifier.
     * @param {string} actionType The change status action to perform on workspace.
     * @param {string} [responseFormat] The response format. If the request has an input body, that body must also use the format specified in \&quot;responseFormat\&quot;. Valid values include �json� and �xml� without the quotes. If the responseFormat isn�t specified, the �accept� HTTP header shall be used to determine the format of the response. If the �accept� HTTP header isn�t specified as well, the default response format shall be in json.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkspaceApi
     */
    public storeStoreIdWorkspaceChangeStatusPut(storeId: string, workspaceId: string, actionType: string, responseFormat?: string, options?: any) {
        return WorkspaceApiFp(this.configuration).storeStoreIdWorkspaceChangeStatusPut(storeId, workspaceId, actionType, responseFormat, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create a worskpace.
     * @param {string} storeId the store identifier.
     * @param {string} name the name of the workspace.
     * @param {string} [description] the description of the workspace.
     * @param {string} [persistent] Whether the workspace is persistent.
     * @param {string} [emergencyFix] Whether the workspace is an emergency fix..
     * @param {string} [responseFormat] The response format. If the request has an input body, that body must also use the format specified in \&quot;responseFormat\&quot;. Valid values include �json� and �xml� without the quotes. If the responseFormat isn�t specified, the �accept� HTTP header shall be used to determine the format of the response. If the �accept� HTTP header isn�t specified as well, the default response format shall be in json.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkspaceApi
     */
    public storeStoreIdWorkspaceCreateWorkspacePost(storeId: string, name: string, description?: string, persistent?: string, emergencyFix?: string, responseFormat?: string, options?: any) {
        return WorkspaceApiFp(this.configuration).storeStoreIdWorkspaceCreateWorkspacePost(storeId, name, description, persistent, emergencyFix, responseFormat, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Finds workspaces by a query. See each query for details on input and output.
     * @param {string} storeId the store identifier.
     * @param {string} q the query name.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkspaceApi
     */
    public storeStoreIdWorkspaceGet(storeId: string, q: string, options?: any) {
        return WorkspaceApiFp(this.configuration).storeStoreIdWorkspaceGet(storeId, q, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update a workspace.
     * @param {string} storeId the store identifier.
     * @param {string} name the name of the workspace.
     * @param {string} [description] the description of the workspace.
     * @param {string} [persistent] Whether the workspace is persistent.
     * @param {string} [emergencyFix] Whether the workspace is an emergency fix..
     * @param {string} [responseFormat] The response format. If the request has an input body, that body must also use the format specified in \&quot;responseFormat\&quot;. Valid values include �json� and �xml� without the quotes. If the responseFormat isn�t specified, the �accept� HTTP header shall be used to determine the format of the response. If the �accept� HTTP header isn�t specified as well, the default response format shall be in json.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkspaceApi
     */
    public storeStoreIdWorkspaceUpdateWorkspacePut(storeId: string, name: string, description?: string, persistent?: string, emergencyFix?: string, responseFormat?: string, options?: any) {
        return WorkspaceApiFp(this.configuration).storeStoreIdWorkspaceUpdateWorkspacePut(storeId, name, description, persistent, emergencyFix, responseFormat, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Finds a workspace by its ID.
     * @param {string} storeId the store identifier.
     * @param {string} workspaceId The workspace identifier.
     * @param {string} [profileName] Profile name. Profiles determine the subset of data to be returned by a query.
     * @param {number} [pageNumber] Page number, starting at 1. Valid values include positive integers of 1 and above. The �pageSize� must be specified for paging to work.
     * @param {number} [pageSize] Page size. Used to limit the amount of data returned by a query. Valid values include positive integers of 1 and above. The �pageNumber� must be specified for paging to work.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkspaceApi
     */
    public storeStoreIdWorkspaceWorkspaceIdWorkspaceIdGet(storeId: string, workspaceId: string, profileName?: string, pageNumber?: number, pageSize?: number, options?: any) {
        return WorkspaceApiFp(this.configuration).storeStoreIdWorkspaceWorkspaceIdWorkspaceIdGet(storeId, workspaceId, profileName, pageNumber, pageSize, options).then((request) => request(this.axios, this.basePath));
    }
}