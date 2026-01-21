/**
 * Patient Medical History Rules
 * File: patient-medical-history.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parsePatientMedicalHistoryId = (value) => parseId(value);
const parsePatientMedicalHistoryPayload = (value) => parsePayload(value);
const parsePatientMedicalHistoryListParams = (value) => parseListParams(value);

export {
  parsePatientMedicalHistoryId,
  parsePatientMedicalHistoryPayload,
  parsePatientMedicalHistoryListParams,
};
