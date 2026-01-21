/**
 * Pre-Authorization Rules
 * File: pre-authorization.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parsePreAuthorizationId = (value) => parseId(value);
const parsePreAuthorizationPayload = (value) => parsePayload(value);
const parsePreAuthorizationListParams = (value) => parseListParams(value);

export { parsePreAuthorizationId, parsePreAuthorizationPayload, parsePreAuthorizationListParams };
