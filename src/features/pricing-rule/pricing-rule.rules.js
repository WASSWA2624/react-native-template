/**
 * Pricing Rule Rules
 * File: pricing-rule.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parsePricingRuleId = (value) => parseId(value);
const parsePricingRulePayload = (value) => parsePayload(value);
const parsePricingRuleListParams = (value) => parseListParams(value);

export { parsePricingRuleId, parsePricingRulePayload, parsePricingRuleListParams };
