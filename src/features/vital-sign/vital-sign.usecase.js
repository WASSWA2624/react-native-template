/**
 * Vital Sign Use Cases
 * File: vital-sign.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { vitalSignApi } from './vital-sign.api';
import { normalizeVitalSign, normalizeVitalSignList } from './vital-sign.model';
import { parseVitalSignId, parseVitalSignListParams, parseVitalSignPayload } from './vital-sign.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listVitalSigns = async (params = {}) =>
  execute(async () => {
    const parsed = parseVitalSignListParams(params);
    const response = await vitalSignApi.list(parsed);
    return normalizeVitalSignList(response.data);
  });

const getVitalSign = async (id) =>
  execute(async () => {
    const parsedId = parseVitalSignId(id);
    const response = await vitalSignApi.get(parsedId);
    return normalizeVitalSign(response.data);
  });

const createVitalSign = async (payload) =>
  execute(async () => {
    const parsed = parseVitalSignPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.VITAL_SIGNS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeVitalSign(parsed);
    }
    const response = await vitalSignApi.create(parsed);
    return normalizeVitalSign(response.data);
  });

const updateVitalSign = async (id, payload) =>
  execute(async () => {
    const parsedId = parseVitalSignId(id);
    const parsed = parseVitalSignPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.VITAL_SIGNS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeVitalSign({ id: parsedId, ...parsed });
    }
    const response = await vitalSignApi.update(parsedId, parsed);
    return normalizeVitalSign(response.data);
  });

const deleteVitalSign = async (id) =>
  execute(async () => {
    const parsedId = parseVitalSignId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.VITAL_SIGNS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeVitalSign({ id: parsedId });
    }
    const response = await vitalSignApi.remove(parsedId);
    return normalizeVitalSign(response.data);
  });

export { listVitalSigns, getVitalSign, createVitalSign, updateVitalSign, deleteVitalSign };
