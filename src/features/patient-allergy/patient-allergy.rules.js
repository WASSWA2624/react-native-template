/**
 * Patient Allergy Rules
 * File: patient-allergy.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parsePatientAllergyId = (value) => parseId(value);
const parsePatientAllergyPayload = (value) => parsePayload(value);
const parsePatientAllergyListParams = (value) => parseListParams(value);

export { parsePatientAllergyId, parsePatientAllergyPayload, parsePatientAllergyListParams };
