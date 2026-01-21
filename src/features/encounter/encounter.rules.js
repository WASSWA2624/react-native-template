/**
 * Encounter Rules
 * File: encounter.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseEncounterId = (value) => parseId(value);
const parseEncounterPayload = (value) => parsePayload(value);
const parseEncounterListParams = (value) => parseListParams(value);

export { parseEncounterId, parseEncounterPayload, parseEncounterListParams };
