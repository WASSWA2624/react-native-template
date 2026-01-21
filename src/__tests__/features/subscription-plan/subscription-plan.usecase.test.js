/**
 * Subscription Plan Usecase Tests
 * File: subscription-plan.usecase.test.js
 */
import {
  listSubscriptionPlans,
  getSubscriptionPlan,
  createSubscriptionPlan,
  updateSubscriptionPlan,
  deleteSubscriptionPlan,
} from '@features/subscription-plan';
import { subscriptionPlanApi } from '@features/subscription-plan/subscription-plan.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/subscription-plan/subscription-plan.api', () => ({
  subscriptionPlanApi: {
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

describe('subscription-plan.usecase', () => {
  beforeEach(() => {
    subscriptionPlanApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    subscriptionPlanApi.get.mockResolvedValue({ data: { id: '1' } });
    subscriptionPlanApi.create.mockResolvedValue({ data: { id: '1' } });
    subscriptionPlanApi.update.mockResolvedValue({ data: { id: '1' } });
    subscriptionPlanApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listSubscriptionPlans,
      get: getSubscriptionPlan,
      create: createSubscriptionPlan,
      update: updateSubscriptionPlan,
      remove: deleteSubscriptionPlan,
    },
    { queueRequestIfOffline }
  );
});
