/**
 * Consent Rules
 * File: consent.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseConsentId = (value) => parseId(value);
const parseConsentPayload = (value) => parsePayload(value);
const parseConsentListParams = (value) => parseListParams(value);

export { parseConsentId, parseConsentPayload, parseConsentListParams };
