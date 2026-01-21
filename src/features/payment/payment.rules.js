/**
 * Payment Rules
 * File: payment.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parsePaymentId = (value) => parseId(value);
const parsePaymentPayload = (value) => parsePayload(value);
const parsePaymentListParams = (value) => parseListParams(value);

export { parsePaymentId, parsePaymentPayload, parsePaymentListParams };
