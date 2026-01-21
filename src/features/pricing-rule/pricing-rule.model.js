/**
 * Pricing Rule Model
 * File: pricing-rule.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizePricingRule = (value) => normalize(value);
const normalizePricingRuleList = (value) => normalizeList(value);

export { normalizePricingRule, normalizePricingRuleList };
