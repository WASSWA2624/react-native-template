/**
 * Template Rules
 * File: template.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseTemplateId = (value) => parseId(value);
const parseTemplatePayload = (value) => parsePayload(value);
const parseTemplateListParams = (value) => parseListParams(value);

export { parseTemplateId, parseTemplatePayload, parseTemplateListParams };
