/**
 * Module API
 * File: module.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const moduleApi = createCrudApi(endpoints.MODULES);

export { moduleApi };
