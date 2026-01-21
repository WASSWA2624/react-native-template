/**
 * Patient Document Rules
 * File: patient-document.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parsePatientDocumentId = (value) => parseId(value);
const parsePatientDocumentPayload = (value) => parsePayload(value);
const parsePatientDocumentListParams = (value) => parseListParams(value);

export { parsePatientDocumentId, parsePatientDocumentPayload, parsePatientDocumentListParams };
