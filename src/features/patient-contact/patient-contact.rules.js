/**
 * Patient Contact Rules
 * File: patient-contact.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parsePatientContactId = (value) => parseId(value);
const parsePatientContactPayload = (value) => parsePayload(value);
const parsePatientContactListParams = (value) => parseListParams(value);

export { parsePatientContactId, parsePatientContactPayload, parsePatientContactListParams };
