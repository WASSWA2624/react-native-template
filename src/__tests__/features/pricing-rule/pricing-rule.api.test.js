/**
 * Pricing Rule API Tests
 * File: pricing-rule.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { pricingRuleApi } from '@features/pricing-rule/pricing-rule.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('pricing-rule.api', () => {
  it('creates crud api with pricing rule endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.PRICING_RULES);
    expect(pricingRuleApi).toBeDefined();
  });
});
