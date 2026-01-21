/**
 * Integration Log Use Cases
 * File: integration-log.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { integrationLogApi } from './integration-log.api';
import { normalizeIntegrationLog, normalizeIntegrationLogList } from './integration-log.model';
import {
  parseIntegrationLogId,
  parseIntegrationLogListParams,
  parseIntegrationLogPayload,
} from './integration-log.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listIntegrationLogs = async (params = {}) =>
  execute(async () => {
    const parsed = parseIntegrationLogListParams(params);
    const response = await integrationLogApi.list(parsed);
    return normalizeIntegrationLogList(response.data);
  });

const getIntegrationLog = async (id) =>
  execute(async () => {
    const parsedId = parseIntegrationLogId(id);
    const response = await integrationLogApi.get(parsedId);
    return normalizeIntegrationLog(response.data);
  });

const createIntegrationLog = async (payload) =>
  execute(async () => {
    const parsed = parseIntegrationLogPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.INTEGRATION_LOGS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeIntegrationLog(parsed);
    }
    const response = await integrationLogApi.create(parsed);
    return normalizeIntegrationLog(response.data);
  });

const updateIntegrationLog = async (id, payload) =>
  execute(async () => {
    const parsedId = parseIntegrationLogId(id);
    const parsed = parseIntegrationLogPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.INTEGRATION_LOGS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeIntegrationLog({ id: parsedId, ...parsed });
    }
    const response = await integrationLogApi.update(parsedId, parsed);
    return normalizeIntegrationLog(response.data);
  });

const deleteIntegrationLog = async (id) =>
  execute(async () => {
    const parsedId = parseIntegrationLogId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.INTEGRATION_LOGS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeIntegrationLog({ id: parsedId });
    }
    const response = await integrationLogApi.remove(parsedId);
    return normalizeIntegrationLog(response.data);
  });

export {
  listIntegrationLogs,
  getIntegrationLog,
  createIntegrationLog,
  updateIntegrationLog,
  deleteIntegrationLog,
};
