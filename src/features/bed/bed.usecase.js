/**
 * Bed Use Cases
 * File: bed.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { bedApi } from './bed.api';
import { normalizeBed, normalizeBedList } from './bed.model';
import { parseBedId, parseBedListParams, parseBedPayload } from './bed.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const getPayload = (response) =>
  (response?.data?.data !== undefined ? response.data.data : response?.data);

const listBeds = async (params = {}) =>
  execute(async () => {
    const parsed = parseBedListParams(params);
    const response = await bedApi.list(parsed);
    const payload = getPayload(response);
    return normalizeBedList(Array.isArray(payload) ? payload : []);
  });

const getBed = async (id) =>
  execute(async () => {
    const parsedId = parseBedId(id);
    const response = await bedApi.get(parsedId);
    return normalizeBed(getPayload(response));
  });

const createBed = async (payload) =>
  execute(async () => {
    const parsed = parseBedPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.BEDS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeBed(parsed);
    }
    const response = await bedApi.create(parsed);
    return normalizeBed(getPayload(response));
  });

const updateBed = async (id, payload) =>
  execute(async () => {
    const parsedId = parseBedId(id);
    const parsed = parseBedPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.BEDS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeBed({ id: parsedId, ...parsed });
    }
    const response = await bedApi.update(parsedId, parsed);
    return normalizeBed(getPayload(response));
  });

const deleteBed = async (id) =>
  execute(async () => {
    const parsedId = parseBedId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.BEDS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return { id: parsedId };
    }
    await bedApi.remove(parsedId);
    return { id: parsedId };
  });

export { listBeds, getBed, createBed, updateBed, deleteBed };
