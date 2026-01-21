/**
 * Patient Rules
 * File: patient.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parsePatientId = (value) => parseId(value);
const parsePatientPayload = (value) => parsePayload(value);
const parsePatientListParams = (value) => parseListParams(value);

export { parsePatientId, parsePatientPayload, parsePatientListParams };
