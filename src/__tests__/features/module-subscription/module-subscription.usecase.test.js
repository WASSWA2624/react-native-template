/**
 * Module Subscription Usecase Tests
 * File: module-subscription.usecase.test.js
 */
import {
  listModuleSubscriptions,
  getModuleSubscription,
  createModuleSubscription,
  updateModuleSubscription,
  deleteModuleSubscription,
} from '@features/module-subscription';
import { moduleSubscriptionApi } from '@features/module-subscription/module-subscription.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/module-subscription/module-subscription.api', () => ({
  moduleSubscriptionApi: {
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

describe('module-subscription.usecase', () => {
  beforeEach(() => {
    moduleSubscriptionApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    moduleSubscriptionApi.get.mockResolvedValue({ data: { id: '1' } });
    moduleSubscriptionApi.create.mockResolvedValue({ data: { id: '1' } });
    moduleSubscriptionApi.update.mockResolvedValue({ data: { id: '1' } });
    moduleSubscriptionApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listModuleSubscriptions,
      get: getModuleSubscription,
      create: createModuleSubscription,
      update: updateModuleSubscription,
      remove: deleteModuleSubscription,
    },
    { queueRequestIfOffline }
  );
});
