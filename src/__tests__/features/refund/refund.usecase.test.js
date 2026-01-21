/**
 * Refund Usecase Tests
 * File: refund.usecase.test.js
 */
import { listRefunds, getRefund, createRefund, updateRefund, deleteRefund } from '@features/refund';
import { refundApi } from '@features/refund/refund.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/refund/refund.api', () => ({
  refundApi: {
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

describe('refund.usecase', () => {
  beforeEach(() => {
    refundApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    refundApi.get.mockResolvedValue({ data: { id: '1' } });
    refundApi.create.mockResolvedValue({ data: { id: '1' } });
    refundApi.update.mockResolvedValue({ data: { id: '1' } });
    refundApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listRefunds,
      get: getRefund,
      create: createRefund,
      update: updateRefund,
      remove: deleteRefund,
    },
    { queueRequestIfOffline }
  );
});
