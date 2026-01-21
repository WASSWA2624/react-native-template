/**
 * Patient Guardian Rules
 * File: patient-guardian.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parsePatientGuardianId = (value) => parseId(value);
const parsePatientGuardianPayload = (value) => parsePayload(value);
const parsePatientGuardianListParams = (value) => parseListParams(value);

export { parsePatientGuardianId, parsePatientGuardianPayload, parsePatientGuardianListParams };
