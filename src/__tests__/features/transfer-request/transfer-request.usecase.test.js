/**
 * Transfer Request Usecase Tests
 * File: transfer-request.usecase.test.js
 */
import {
  listTransferRequests,
  getTransferRequest,
  createTransferRequest,
  updateTransferRequest,
  deleteTransferRequest,
} from '@features/transfer-request';
import { transferRequestApi } from '@features/transfer-request/transfer-request.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/transfer-request/transfer-request.api', () => ({
  transferRequestApi: {
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

describe('transfer-request.usecase', () => {
  beforeEach(() => {
    transferRequestApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    transferRequestApi.get.mockResolvedValue({ data: { id: '1' } });
    transferRequestApi.create.mockResolvedValue({ data: { id: '1' } });
    transferRequestApi.update.mockResolvedValue({ data: { id: '1' } });
    transferRequestApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listTransferRequests,
      get: getTransferRequest,
      create: createTransferRequest,
      update: updateTransferRequest,
      remove: deleteTransferRequest,
    },
    { queueRequestIfOffline }
  );
});
