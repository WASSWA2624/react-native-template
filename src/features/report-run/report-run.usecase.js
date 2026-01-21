/**
 * Report Run Use Cases
 * File: report-run.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { reportRunApi } from './report-run.api';
import { normalizeReportRun, normalizeReportRunList } from './report-run.model';
import { parseReportRunId, parseReportRunListParams, parseReportRunPayload } from './report-run.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listReportRuns = async (params = {}) =>
  execute(async () => {
    const parsed = parseReportRunListParams(params);
    const response = await reportRunApi.list(parsed);
    return normalizeReportRunList(response.data);
  });

const getReportRun = async (id) =>
  execute(async () => {
    const parsedId = parseReportRunId(id);
    const response = await reportRunApi.get(parsedId);
    return normalizeReportRun(response.data);
  });

const createReportRun = async (payload) =>
  execute(async () => {
    const parsed = parseReportRunPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.REPORT_RUNS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeReportRun(parsed);
    }
    const response = await reportRunApi.create(parsed);
    return normalizeReportRun(response.data);
  });

const updateReportRun = async (id, payload) =>
  execute(async () => {
    const parsedId = parseReportRunId(id);
    const parsed = parseReportRunPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.REPORT_RUNS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeReportRun({ id: parsedId, ...parsed });
    }
    const response = await reportRunApi.update(parsedId, parsed);
    return normalizeReportRun(response.data);
  });

const deleteReportRun = async (id) =>
  execute(async () => {
    const parsedId = parseReportRunId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.REPORT_RUNS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeReportRun({ id: parsedId });
    }
    const response = await reportRunApi.remove(parsedId);
    return normalizeReportRun(response.data);
  });

export { listReportRuns, getReportRun, createReportRun, updateReportRun, deleteReportRun };
