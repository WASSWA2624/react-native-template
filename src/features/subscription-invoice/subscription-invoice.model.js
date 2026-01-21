/**
 * Subscription Invoice Model
 * File: subscription-invoice.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeSubscriptionInvoice = (value) => normalize(value);
const normalizeSubscriptionInvoiceList = (value) => normalizeList(value);

export { normalizeSubscriptionInvoice, normalizeSubscriptionInvoiceList };
