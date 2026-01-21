/**
 * Refund API
 * File: refund.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const refundApi = createCrudApi(endpoints.REFUNDS);

export { refundApi };
