/**
 * Billing Adjustment Rules
 * File: billing-adjustment.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseBillingAdjustmentId = (value) => parseId(value);
const parseBillingAdjustmentPayload = (value) => parsePayload(value);
const parseBillingAdjustmentListParams = (value) => parseListParams(value);

export { parseBillingAdjustmentId, parseBillingAdjustmentPayload, parseBillingAdjustmentListParams };
