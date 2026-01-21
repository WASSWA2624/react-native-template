/**
 * Radiology Order Usecase Tests
 * File: radiology-order.usecase.test.js
 */
import {
  listRadiologyOrders,
  getRadiologyOrder,
  createRadiologyOrder,
  updateRadiologyOrder,
  deleteRadiologyOrder,
} from '@features/radiology-order';
import { radiologyOrderApi } from '@features/radiology-order/radiology-order.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/radiology-order/radiology-order.api', () => ({
  radiologyOrderApi: {
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

describe('radiology-order.usecase', () => {
  beforeEach(() => {
    radiologyOrderApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    radiologyOrderApi.get.mockResolvedValue({ data: { id: '1' } });
    radiologyOrderApi.create.mockResolvedValue({ data: { id: '1' } });
    radiologyOrderApi.update.mockResolvedValue({ data: { id: '1' } });
    radiologyOrderApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listRadiologyOrders,
      get: getRadiologyOrder,
      create: createRadiologyOrder,
      update: updateRadiologyOrder,
      remove: deleteRadiologyOrder,
    },
    { queueRequestIfOffline }
  );
});
