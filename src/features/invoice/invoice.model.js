/**
 * Invoice Model
 * File: invoice.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeInvoice = (value) => normalize(value);
const normalizeInvoiceList = (value) => normalizeList(value);

export { normalizeInvoice, normalizeInvoiceList };
