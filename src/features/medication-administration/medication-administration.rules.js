/**
 * Medication Administration Rules
 * File: medication-administration.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseMedicationAdministrationId = (value) => parseId(value);
const parseMedicationAdministrationPayload = (value) => parsePayload(value);
const parseMedicationAdministrationListParams = (value) => parseListParams(value);

export {
  parseMedicationAdministrationId,
  parseMedicationAdministrationPayload,
  parseMedicationAdministrationListParams,
};
