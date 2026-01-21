/**
 * Subscription Plan API Tests
 * File: subscription-plan.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { subscriptionPlanApi } from '@features/subscription-plan/subscription-plan.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('subscription-plan.api', () => {
  it('creates crud api with subscription plan endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.SUBSCRIPTION_PLANS);
    expect(subscriptionPlanApi).toBeDefined();
  });
});
