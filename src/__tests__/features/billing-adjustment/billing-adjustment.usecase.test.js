/**
 * Billing Adjustment Usecase Tests
 * File: billing-adjustment.usecase.test.js
 */
import {
  listBillingAdjustments,
  getBillingAdjustment,
  createBillingAdjustment,
  updateBillingAdjustment,
  deleteBillingAdjustment,
} from '@features/billing-adjustment';
import { billingAdjustmentApi } from '@features/billing-adjustment/billing-adjustment.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/billing-adjustment/billing-adjustment.api', () => ({
  billingAdjustmentApi: {
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

describe('billing-adjustment.usecase', () => {
  beforeEach(() => {
    billingAdjustmentApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    billingAdjustmentApi.get.mockResolvedValue({ data: { id: '1' } });
    billingAdjustmentApi.create.mockResolvedValue({ data: { id: '1' } });
    billingAdjustmentApi.update.mockResolvedValue({ data: { id: '1' } });
    billingAdjustmentApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listBillingAdjustments,
      get: getBillingAdjustment,
      create: createBillingAdjustment,
      update: updateBillingAdjustment,
      remove: deleteBillingAdjustment,
    },
    { queueRequestIfOffline }
  );
});
