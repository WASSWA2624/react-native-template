/**
 * Payment API
 * File: payment.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const paymentApi = createCrudApi(endpoints.PAYMENTS);

export { paymentApi };
