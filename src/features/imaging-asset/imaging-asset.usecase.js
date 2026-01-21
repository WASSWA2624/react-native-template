/**
 * Imaging Asset Use Cases
 * File: imaging-asset.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { imagingAssetApi } from './imaging-asset.api';
import { normalizeImagingAsset, normalizeImagingAssetList } from './imaging-asset.model';
import { parseImagingAssetId, parseImagingAssetListParams, parseImagingAssetPayload } from './imaging-asset.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listImagingAssets = async (params = {}) =>
  execute(async () => {
    const parsed = parseImagingAssetListParams(params);
    const response = await imagingAssetApi.list(parsed);
    return normalizeImagingAssetList(response.data);
  });

const getImagingAsset = async (id) =>
  execute(async () => {
    const parsedId = parseImagingAssetId(id);
    const response = await imagingAssetApi.get(parsedId);
    return normalizeImagingAsset(response.data);
  });

const createImagingAsset = async (payload) =>
  execute(async () => {
    const parsed = parseImagingAssetPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.IMAGING_ASSETS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeImagingAsset(parsed);
    }
    const response = await imagingAssetApi.create(parsed);
    return normalizeImagingAsset(response.data);
  });

const updateImagingAsset = async (id, payload) =>
  execute(async () => {
    const parsedId = parseImagingAssetId(id);
    const parsed = parseImagingAssetPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.IMAGING_ASSETS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeImagingAsset({ id: parsedId, ...parsed });
    }
    const response = await imagingAssetApi.update(parsedId, parsed);
    return normalizeImagingAsset(response.data);
  });

const deleteImagingAsset = async (id) =>
  execute(async () => {
    const parsedId = parseImagingAssetId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.IMAGING_ASSETS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeImagingAsset({ id: parsedId });
    }
    const response = await imagingAssetApi.remove(parsedId);
    return normalizeImagingAsset(response.data);
  });

export { listImagingAssets, getImagingAsset, createImagingAsset, updateImagingAsset, deleteImagingAsset };
