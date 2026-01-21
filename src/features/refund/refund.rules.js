/**
 * Refund Rules
 * File: refund.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseRefundId = (value) => parseId(value);
const parseRefundPayload = (value) => parsePayload(value);
const parseRefundListParams = (value) => parseListParams(value);

export { parseRefundId, parseRefundPayload, parseRefundListParams };
