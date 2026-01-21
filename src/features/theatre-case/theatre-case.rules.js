/**
 * Theatre Case Rules
 * File: theatre-case.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseTheatreCaseId = (value) => parseId(value);
const parseTheatreCasePayload = (value) => parsePayload(value);
const parseTheatreCaseListParams = (value) => parseListParams(value);

export { parseTheatreCaseId, parseTheatreCasePayload, parseTheatreCaseListParams };
