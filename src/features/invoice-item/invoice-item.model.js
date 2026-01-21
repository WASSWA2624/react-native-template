/**
 * Invoice Item Model
 * File: invoice-item.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeInvoiceItem = (value) => normalize(value);
const normalizeInvoiceItemList = (value) => normalizeList(value);

export { normalizeInvoiceItem, normalizeInvoiceItemList };
