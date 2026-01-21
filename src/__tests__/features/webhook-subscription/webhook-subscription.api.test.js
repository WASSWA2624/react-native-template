/**
 * Webhook Subscription API Tests
 * File: webhook-subscription.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { webhookSubscriptionApi } from '@features/webhook-subscription/webhook-subscription.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('webhook-subscription.api', () => {
  it('creates crud api with webhook subscription endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.WEBHOOK_SUBSCRIPTIONS);
    expect(webhookSubscriptionApi).toBeDefined();
  });
});
