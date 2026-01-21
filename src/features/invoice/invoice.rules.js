/**
 * Invoice Rules
 * File: invoice.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseInvoiceId = (value) => parseId(value);
const parseInvoicePayload = (value) => parsePayload(value);
const parseInvoiceListParams = (value) => parseListParams(value);

export { parseInvoiceId, parseInvoicePayload, parseInvoiceListParams };
