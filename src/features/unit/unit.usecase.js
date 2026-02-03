/**
 * Unit Use Cases
 * File: unit.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { unitApi } from './unit.api';
import { normalizeUnit, normalizeUnitList } from './unit.model';
import { parseUnitId, parseUnitListParams, parseUnitPayload } from './unit.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const getPayload = (response) =>
  (response?.data?.data !== undefined ? response.data.data : response?.data);

const listUnits = async (params = {}) =>
  execute(async () => {
    const parsed = parseUnitListParams(params);
    const response = await unitApi.list(parsed);
    const payload = getPayload(response);
    return normalizeUnitList(Array.isArray(payload) ? payload : []);
  });

const getUnit = async (id) =>
  execute(async () => {
    const parsedId = parseUnitId(id);
    const response = await unitApi.get(parsedId);
    return normalizeUnit(getPayload(response));
  });

const createUnit = async (payload) =>
  execute(async () => {
    const parsed = parseUnitPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.UNITS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeUnit(parsed);
    }
    const response = await unitApi.create(parsed);
    return normalizeUnit(getPayload(response));
  });

const updateUnit = async (id, payload) =>
  execute(async () => {
    const parsedId = parseUnitId(id);
    const parsed = parseUnitPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.UNITS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeUnit({ id: parsedId, ...parsed });
    }
    const response = await unitApi.update(parsedId, parsed);
    return normalizeUnit(getPayload(response));
  });

const deleteUnit = async (id) =>
  execute(async () => {
    const parsedId = parseUnitId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.UNITS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return { id: parsedId };
    }
    await unitApi.remove(parsedId);
    return { id: parsedId };
  });

export { listUnits, getUnit, createUnit, updateUnit, deleteUnit };
