/**
 * Clinical Alert Rules
 * File: clinical-alert.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseClinicalAlertId = (value) => parseId(value);
const parseClinicalAlertPayload = (value) => parsePayload(value);
const parseClinicalAlertListParams = (value) => parseListParams(value);

export { parseClinicalAlertId, parseClinicalAlertPayload, parseClinicalAlertListParams };
