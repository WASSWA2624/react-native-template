/**
 * Subscription API Tests
 * File: subscription.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { subscriptionApi } from '@features/subscription/subscription.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('subscription.api', () => {
  it('creates crud api with subscription endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.SUBSCRIPTIONS);
    expect(subscriptionApi).toBeDefined();
  });
});
