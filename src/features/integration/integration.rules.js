/**
 * Integration Rules
 * File: integration.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseIntegrationId = (value) => parseId(value);
const parseIntegrationPayload = (value) => parsePayload(value);
const parseIntegrationListParams = (value) => parseListParams(value);

export { parseIntegrationId, parseIntegrationPayload, parseIntegrationListParams };
