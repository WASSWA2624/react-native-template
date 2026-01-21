/**
 * Referral Rules
 * File: referral.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseReferralId = (value) => parseId(value);
const parseReferralPayload = (value) => parsePayload(value);
const parseReferralListParams = (value) => parseListParams(value);

export { parseReferralId, parseReferralPayload, parseReferralListParams };
