/**
 * Report Definition Use Cases
 * File: report-definition.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { reportDefinitionApi } from './report-definition.api';
import { normalizeReportDefinition, normalizeReportDefinitionList } from './report-definition.model';
import {
  parseReportDefinitionId,
  parseReportDefinitionListParams,
  parseReportDefinitionPayload,
} from './report-definition.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listReportDefinitions = async (params = {}) =>
  execute(async () => {
    const parsed = parseReportDefinitionListParams(params);
    const response = await reportDefinitionApi.list(parsed);
    return normalizeReportDefinitionList(response.data);
  });

const getReportDefinition = async (id) =>
  execute(async () => {
    const parsedId = parseReportDefinitionId(id);
    const response = await reportDefinitionApi.get(parsedId);
    return normalizeReportDefinition(response.data);
  });

const createReportDefinition = async (payload) =>
  execute(async () => {
    const parsed = parseReportDefinitionPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.REPORT_DEFINITIONS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeReportDefinition(parsed);
    }
    const response = await reportDefinitionApi.create(parsed);
    return normalizeReportDefinition(response.data);
  });

const updateReportDefinition = async (id, payload) =>
  execute(async () => {
    const parsedId = parseReportDefinitionId(id);
    const parsed = parseReportDefinitionPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.REPORT_DEFINITIONS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeReportDefinition({ id: parsedId, ...parsed });
    }
    const response = await reportDefinitionApi.update(parsedId, parsed);
    return normalizeReportDefinition(response.data);
  });

const deleteReportDefinition = async (id) =>
  execute(async () => {
    const parsedId = parseReportDefinitionId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.REPORT_DEFINITIONS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeReportDefinition({ id: parsedId });
    }
    const response = await reportDefinitionApi.remove(parsedId);
    return normalizeReportDefinition(response.data);
  });

export {
  listReportDefinitions,
  getReportDefinition,
  createReportDefinition,
  updateReportDefinition,
  deleteReportDefinition,
};
