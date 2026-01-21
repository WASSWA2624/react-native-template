/**
 * Pre-Authorization API
 * File: pre-authorization.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const preAuthorizationApi = createCrudApi(endpoints.PRE_AUTHORIZATIONS);

export { preAuthorizationApi };
