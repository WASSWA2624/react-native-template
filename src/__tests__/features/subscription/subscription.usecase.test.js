/**
 * Subscription Usecase Tests
 * File: subscription.usecase.test.js
 */
import {
  listSubscriptions,
  getSubscription,
  createSubscription,
  updateSubscription,
  deleteSubscription,
} from '@features/subscription';
import { subscriptionApi } from '@features/subscription/subscription.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/subscription/subscription.api', () => ({
  subscriptionApi: {
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

describe('subscription.usecase', () => {
  beforeEach(() => {
    subscriptionApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    subscriptionApi.get.mockResolvedValue({ data: { id: '1' } });
    subscriptionApi.create.mockResolvedValue({ data: { id: '1' } });
    subscriptionApi.update.mockResolvedValue({ data: { id: '1' } });
    subscriptionApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listSubscriptions,
      get: getSubscription,
      create: createSubscription,
      update: updateSubscription,
      remove: deleteSubscription,
    },
    { queueRequestIfOffline }
  );
});
