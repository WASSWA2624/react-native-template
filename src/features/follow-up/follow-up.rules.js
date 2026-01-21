/**
 * Follow Up Rules
 * File: follow-up.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseFollowUpId = (value) => parseId(value);
const parseFollowUpPayload = (value) => parsePayload(value);
const parseFollowUpListParams = (value) => parseListParams(value);

export { parseFollowUpId, parseFollowUpPayload, parseFollowUpListParams };
