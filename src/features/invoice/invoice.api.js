/**
 * Invoice API
 * File: invoice.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const invoiceApi = createCrudApi(endpoints.INVOICES);

export { invoiceApi };
