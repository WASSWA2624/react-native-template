/**
 * Asset Use Cases
 * File: asset.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { assetApi } from './asset.api';
import { normalizeAsset, normalizeAssetList } from './asset.model';
import { parseAssetId, parseAssetListParams, parseAssetPayload } from './asset.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listAssets = async (params = {}) =>
  execute(async () => {
    const parsed = parseAssetListParams(params);
    const response = await assetApi.list(parsed);
    return normalizeAssetList(response.data);
  });

const getAsset = async (id) =>
  execute(async () => {
    const parsedId = parseAssetId(id);
    const response = await assetApi.get(parsedId);
    return normalizeAsset(response.data);
  });

const createAsset = async (payload) =>
  execute(async () => {
    const parsed = parseAssetPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.ASSETS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeAsset(parsed);
    }
    const response = await assetApi.create(parsed);
    return normalizeAsset(response.data);
  });

const updateAsset = async (id, payload) =>
  execute(async () => {
    const parsedId = parseAssetId(id);
    const parsed = parseAssetPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.ASSETS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeAsset({ id: parsedId, ...parsed });
    }
    const response = await assetApi.update(parsedId, parsed);
    return normalizeAsset(response.data);
  });

const deleteAsset = async (id) =>
  execute(async () => {
    const parsedId = parseAssetId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.ASSETS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeAsset({ id: parsedId });
    }
    const response = await assetApi.remove(parsedId);
    return normalizeAsset(response.data);
  });

export { listAssets, getAsset, createAsset, updateAsset, deleteAsset };
