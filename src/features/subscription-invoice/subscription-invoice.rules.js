/**
 * Subscription Invoice Rules
 * File: subscription-invoice.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseSubscriptionInvoiceId = (value) => parseId(value);
const parseSubscriptionInvoicePayload = (value) => parsePayload(value);
const parseSubscriptionInvoiceListParams = (value) => parseListParams(value);

export { parseSubscriptionInvoiceId, parseSubscriptionInvoicePayload, parseSubscriptionInvoiceListParams };
