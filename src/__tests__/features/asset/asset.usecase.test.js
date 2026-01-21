/**
 * Asset Usecase Tests
 * File: asset.usecase.test.js
 */
import { listAssets, getAsset, createAsset, updateAsset, deleteAsset } from '@features/asset';
import { assetApi } from '@features/asset/asset.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/asset/asset.api', () => ({
  assetApi: {
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

describe('asset.usecase', () => {
  beforeEach(() => {
    assetApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    assetApi.get.mockResolvedValue({ data: { id: '1' } });
    assetApi.create.mockResolvedValue({ data: { id: '1' } });
    assetApi.update.mockResolvedValue({ data: { id: '1' } });
    assetApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listAssets,
      get: getAsset,
      create: createAsset,
      update: updateAsset,
      remove: deleteAsset,
    },
    { queueRequestIfOffline }
  );
});
