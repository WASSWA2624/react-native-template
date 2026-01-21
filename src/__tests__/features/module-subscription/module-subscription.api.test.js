/**
 * Module Subscription API Tests
 * File: module-subscription.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { moduleSubscriptionApi } from '@features/module-subscription/module-subscription.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('module-subscription.api', () => {
  it('creates crud api with module subscription endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.MODULE_SUBSCRIPTIONS);
    expect(moduleSubscriptionApi).toBeDefined();
  });
});
