/**
 * Subscription Invoice API
 * File: subscription-invoice.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const subscriptionInvoiceApi = createCrudApi(endpoints.SUBSCRIPTION_INVOICES);

export { subscriptionInvoiceApi };
