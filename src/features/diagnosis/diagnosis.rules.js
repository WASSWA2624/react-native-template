/**
 * Diagnosis Rules
 * File: diagnosis.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseDiagnosisId = (value) => parseId(value);
const parseDiagnosisPayload = (value) => parsePayload(value);
const parseDiagnosisListParams = (value) => parseListParams(value);

export { parseDiagnosisId, parseDiagnosisPayload, parseDiagnosisListParams };
