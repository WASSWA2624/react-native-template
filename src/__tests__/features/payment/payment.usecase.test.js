/**
 * Payment Usecase Tests
 * File: payment.usecase.test.js
 */
import {
  listPayments,
  getPayment,
  createPayment,
  updatePayment,
  deletePayment,
} from '@features/payment';
import { paymentApi } from '@features/payment/payment.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/payment/payment.api', () => ({
  paymentApi: {
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

describe('payment.usecase', () => {
  beforeEach(() => {
    paymentApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    paymentApi.get.mockResolvedValue({ data: { id: '1' } });
    paymentApi.create.mockResolvedValue({ data: { id: '1' } });
    paymentApi.update.mockResolvedValue({ data: { id: '1' } });
    paymentApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listPayments,
      get: getPayment,
      create: createPayment,
      update: updatePayment,
      remove: deletePayment,
    },
    { queueRequestIfOffline }
  );
});
