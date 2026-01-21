/**
 * Integration Log Rules
 * File: integration-log.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseIntegrationLogId = (value) => parseId(value);
const parseIntegrationLogPayload = (value) => parsePayload(value);
const parseIntegrationLogListParams = (value) => parseListParams(value);

export { parseIntegrationLogId, parseIntegrationLogPayload, parseIntegrationLogListParams };
