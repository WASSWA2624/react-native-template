/**
 * Admission Rules
 * File: admission.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseAdmissionId = (value) => parseId(value);
const parseAdmissionPayload = (value) => parsePayload(value);
const parseAdmissionListParams = (value) => parseListParams(value);

export { parseAdmissionId, parseAdmissionPayload, parseAdmissionListParams };
