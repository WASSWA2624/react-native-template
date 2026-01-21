/**
 * Module Rules
 * File: module.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseModuleId = (value) => parseId(value);
const parseModulePayload = (value) => parsePayload(value);
const parseModuleListParams = (value) => parseListParams(value);

export { parseModuleId, parseModulePayload, parseModuleListParams };
