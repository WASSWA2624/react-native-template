/**
 * Integration Log API
 * File: integration-log.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const integrationLogApi = createCrudApi(endpoints.INTEGRATION_LOGS);

export { integrationLogApi };
