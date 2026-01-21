/**
 * Pricing Rule Usecase Tests
 * File: pricing-rule.usecase.test.js
 */
import {
  listPricingRules,
  getPricingRule,
  createPricingRule,
  updatePricingRule,
  deletePricingRule,
} from '@features/pricing-rule';
import { pricingRuleApi } from '@features/pricing-rule/pricing-rule.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/pricing-rule/pricing-rule.api', () => ({
  pricingRuleApi: {
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  },
}));

jest.mock('@offline/request', () => ({
  queueRequestIfOffline: jest.fn(),
}));

describe('pricing-rule.usecase', () => {
  beforeEach(() => {
    pricingRuleApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    pricingRuleApi.get.mockResolvedValue({ data: { id: '1' } });
    pricingRuleApi.create.mockResolvedValue({ data: { id: '1' } });
    pricingRuleApi.update.mockResolvedValue({ data: { id: '1' } });
    pricingRuleApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listPricingRules,
      get: getPricingRule,
      create: createPricingRule,
      update: updatePricingRule,
      remove: deletePricingRule,
    },
    { queueRequestIfOffline }
  );
});
