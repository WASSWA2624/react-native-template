/**
 * Asset Service Log Usecase Tests
 * File: asset-service-log.usecase.test.js
 */
import {
  listAssetServiceLogs,
  getAssetServiceLog,
  createAssetServiceLog,
  updateAssetServiceLog,
  deleteAssetServiceLog,
} from '@features/asset-service-log';
import { assetServiceLogApi } from '@features/asset-service-log/asset-service-log.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/asset-service-log/asset-service-log.api', () => ({
  assetServiceLogApi: {
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

describe('asset-service-log.usecase', () => {
  beforeEach(() => {
    assetServiceLogApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    assetServiceLogApi.get.mockResolvedValue({ data: { id: '1' } });
    assetServiceLogApi.create.mockResolvedValue({ data: { id: '1' } });
    assetServiceLogApi.update.mockResolvedValue({ data: { id: '1' } });
    assetServiceLogApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listAssetServiceLogs,
      get: getAssetServiceLog,
      create: createAssetServiceLog,
      update: updateAssetServiceLog,
      remove: deleteAssetServiceLog,
    },
    { queueRequestIfOffline }
  );
});
