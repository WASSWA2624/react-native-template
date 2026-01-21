/**
 * Patient Identifier Rules
 * File: patient-identifier.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parsePatientIdentifierId = (value) => parseId(value);
const parsePatientIdentifierPayload = (value) => parsePayload(value);
const parsePatientIdentifierListParams = (value) => parseListParams(value);

export {
  parsePatientIdentifierId,
  parsePatientIdentifierPayload,
  parsePatientIdentifierListParams,
};
