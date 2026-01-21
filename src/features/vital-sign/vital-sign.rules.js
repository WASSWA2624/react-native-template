/**
 * Vital Sign Rules
 * File: vital-sign.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseVitalSignId = (value) => parseId(value);
const parseVitalSignPayload = (value) => parsePayload(value);
const parseVitalSignListParams = (value) => parseListParams(value);

export { parseVitalSignId, parseVitalSignPayload, parseVitalSignListParams };
