/**
 * Radiology Order API
 * File: radiology-order.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const radiologyOrderApi = createCrudApi(endpoints.RADIOLOGY_ORDERS);

export { radiologyOrderApi };
