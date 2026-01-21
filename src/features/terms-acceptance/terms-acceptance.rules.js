/**
 * Terms Acceptance Rules
 * File: terms-acceptance.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseTermsAcceptanceId = (value) => parseId(value);
const parseTermsAcceptancePayload = (value) => parsePayload(value);
const parseTermsAcceptanceListParams = (value) => parseListParams(value);

export { parseTermsAcceptanceId, parseTermsAcceptancePayload, parseTermsAcceptanceListParams };
