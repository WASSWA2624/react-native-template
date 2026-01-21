/**
 * Integration API
 * File: integration.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const integrationApi = createCrudApi(endpoints.INTEGRATIONS);

export { integrationApi };
