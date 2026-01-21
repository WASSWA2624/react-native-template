/**
 * Radiology Order Rules
 * File: radiology-order.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseRadiologyOrderId = (value) => parseId(value);
const parseRadiologyOrderPayload = (value) => parsePayload(value);
const parseRadiologyOrderListParams = (value) => parseListParams(value);

export { parseRadiologyOrderId, parseRadiologyOrderPayload, parseRadiologyOrderListParams };
