/**
 * Webhook Subscription Usecase Tests
 * File: webhook-subscription.usecase.test.js
 */
import {
  listWebhookSubscriptions,
  getWebhookSubscription,
  createWebhookSubscription,
  updateWebhookSubscription,
  deleteWebhookSubscription,
} from '@features/webhook-subscription';
import { webhookSubscriptionApi } from '@features/webhook-subscription/webhook-subscription.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/webhook-subscription/webhook-subscription.api', () => ({
  webhookSubscriptionApi: {
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

describe('webhook-subscription.usecase', () => {
  beforeEach(() => {
    webhookSubscriptionApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    webhookSubscriptionApi.get.mockResolvedValue({ data: { id: '1' } });
    webhookSubscriptionApi.create.mockResolvedValue({ data: { id: '1' } });
    webhookSubscriptionApi.update.mockResolvedValue({ data: { id: '1' } });
    webhookSubscriptionApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listWebhookSubscriptions,
      get: getWebhookSubscription,
      create: createWebhookSubscription,
      update: updateWebhookSubscription,
      remove: deleteWebhookSubscription,
    },
    { queueRequestIfOffline }
  );
});
