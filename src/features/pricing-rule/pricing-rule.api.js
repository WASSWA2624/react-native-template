/**
 * Pricing Rule API
 * File: pricing-rule.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const pricingRuleApi = createCrudApi(endpoints.PRICING_RULES);

export { pricingRuleApi };
