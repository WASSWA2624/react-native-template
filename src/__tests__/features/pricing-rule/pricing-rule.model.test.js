/**
 * Pricing Rule Model Tests
 * File: pricing-rule.model.test.js
 */
import { normalizePricingRule, normalizePricingRuleList } from '@features/pricing-rule';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('pricing-rule.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizePricingRule, normalizePricingRuleList);
  });
});
