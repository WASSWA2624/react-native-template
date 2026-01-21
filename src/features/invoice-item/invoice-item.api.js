/**
 * Invoice Item API
 * File: invoice-item.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const invoiceItemApi = createCrudApi(endpoints.INVOICE_ITEMS);

export { invoiceItemApi };
