/**
 * Imaging Asset Usecase Tests
 * File: imaging-asset.usecase.test.js
 */
import {
  listImagingAssets,
  getImagingAsset,
  createImagingAsset,
  updateImagingAsset,
  deleteImagingAsset,
} from '@features/imaging-asset';
import { imagingAssetApi } from '@features/imaging-asset/imaging-asset.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/imaging-asset/imaging-asset.api', () => ({
  imagingAssetApi: {
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

describe('imaging-asset.usecase', () => {
  beforeEach(() => {
    imagingAssetApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    imagingAssetApi.get.mockResolvedValue({ data: { id: '1' } });
    imagingAssetApi.create.mockResolvedValue({ data: { id: '1' } });
    imagingAssetApi.update.mockResolvedValue({ data: { id: '1' } });
    imagingAssetApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listImagingAssets,
      get: getImagingAsset,
      create: createImagingAsset,
      update: updateImagingAsset,
      remove: deleteImagingAsset,
    },
    { queueRequestIfOffline }
  );
});
