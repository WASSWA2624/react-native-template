/**
 * Invoice Item Rules
 * File: invoice-item.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseInvoiceItemId = (value) => parseId(value);
const parseInvoiceItemPayload = (value) => parsePayload(value);
const parseInvoiceItemListParams = (value) => parseListParams(value);

export { parseInvoiceItemId, parseInvoiceItemPayload, parseInvoiceItemListParams };
