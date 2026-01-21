/**
 * Asset Service Log Use Cases
 * File: asset-service-log.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { assetServiceLogApi } from './asset-service-log.api';
import {
  normalizeAssetServiceLog,
  normalizeAssetServiceLogList,
} from './asset-service-log.model';
import {
  parseAssetServiceLogId,
  parseAssetServiceLogListParams,
  parseAssetServiceLogPayload,
} from './asset-service-log.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listAssetServiceLogs = async (params = {}) =>
  execute(async () => {
    const parsed = parseAssetServiceLogListParams(params);
    const response = await assetServiceLogApi.list(parsed);
    return normalizeAssetServiceLogList(response.data);
  });

const getAssetServiceLog = async (id) =>
  execute(async () => {
    const parsedId = parseAssetServiceLogId(id);
    const response = await assetServiceLogApi.get(parsedId);
    return normalizeAssetServiceLog(response.data);
  });

const createAssetServiceLog = async (payload) =>
  execute(async () => {
    const parsed = parseAssetServiceLogPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.ASSET_SERVICE_LOGS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeAssetServiceLog(parsed);
    }
    const response = await assetServiceLogApi.create(parsed);
    return normalizeAssetServiceLog(response.data);
  });

const updateAssetServiceLog = async (id, payload) =>
  execute(async () => {
    const parsedId = parseAssetServiceLogId(id);
    const parsed = parseAssetServiceLogPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.ASSET_SERVICE_LOGS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeAssetServiceLog({ id: parsedId, ...parsed });
    }
    const response = await assetServiceLogApi.update(parsedId, parsed);
    return normalizeAssetServiceLog(response.data);
  });

const deleteAssetServiceLog = async (id) =>
  execute(async () => {
    const parsedId = parseAssetServiceLogId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.ASSET_SERVICE_LOGS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeAssetServiceLog({ id: parsedId });
    }
    const response = await assetServiceLogApi.remove(parsedId);
    return normalizeAssetServiceLog(response.data);
  });

export {
  listAssetServiceLogs,
  getAssetServiceLog,
  createAssetServiceLog,
  updateAssetServiceLog,
  deleteAssetServiceLog,
};
