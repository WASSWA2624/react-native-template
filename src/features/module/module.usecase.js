/**
 * Module Use Cases
 * File: module.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { moduleApi } from './module.api';
import { normalizeModule, normalizeModuleList } from './module.model';
import { parseModuleId, parseModuleListParams, parseModulePayload } from './module.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listModules = async (params = {}) =>
  execute(async () => {
    const parsed = parseModuleListParams(params);
    const response = await moduleApi.list(parsed);
    return normalizeModuleList(response.data);
  });

const getModule = async (id) =>
  execute(async () => {
    const parsedId = parseModuleId(id);
    const response = await moduleApi.get(parsedId);
    return normalizeModule(response.data);
  });

const createModule = async (payload) =>
  execute(async () => {
    const parsed = parseModulePayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.MODULES.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeModule(parsed);
    }
    const response = await moduleApi.create(parsed);
    return normalizeModule(response.data);
  });

const updateModule = async (id, payload) =>
  execute(async () => {
    const parsedId = parseModuleId(id);
    const parsed = parseModulePayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.MODULES.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeModule({ id: parsedId, ...parsed });
    }
    const response = await moduleApi.update(parsedId, parsed);
    return normalizeModule(response.data);
  });

const deleteModule = async (id) =>
  execute(async () => {
    const parsedId = parseModuleId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.MODULES.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeModule({ id: parsedId });
    }
    const response = await moduleApi.remove(parsedId);
    return normalizeModule(response.data);
  });

export { listModules, getModule, createModule, updateModule, deleteModule };
