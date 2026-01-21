/**
 * Template Variable Rules
 * File: template-variable.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseTemplateVariableId = (value) => parseId(value);
const parseTemplateVariablePayload = (value) => parsePayload(value);
const parseTemplateVariableListParams = (value) => parseListParams(value);

export {
  parseTemplateVariableId,
  parseTemplateVariablePayload,
  parseTemplateVariableListParams,
};
