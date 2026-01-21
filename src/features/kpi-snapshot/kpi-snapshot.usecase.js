/**
 * KPI Snapshot Use Cases
 * File: kpi-snapshot.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { kpiSnapshotApi } from './kpi-snapshot.api';
import { normalizeKpiSnapshot, normalizeKpiSnapshotList } from './kpi-snapshot.model';
import {
  parseKpiSnapshotId,
  parseKpiSnapshotListParams,
  parseKpiSnapshotPayload,
} from './kpi-snapshot.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listKpiSnapshots = async (params = {}) =>
  execute(async () => {
    const parsed = parseKpiSnapshotListParams(params);
    const response = await kpiSnapshotApi.list(parsed);
    return normalizeKpiSnapshotList(response.data);
  });

const getKpiSnapshot = async (id) =>
  execute(async () => {
    const parsedId = parseKpiSnapshotId(id);
    const response = await kpiSnapshotApi.get(parsedId);
    return normalizeKpiSnapshot(response.data);
  });

const createKpiSnapshot = async (payload) =>
  execute(async () => {
    const parsed = parseKpiSnapshotPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.KPI_SNAPSHOTS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeKpiSnapshot(parsed);
    }
    const response = await kpiSnapshotApi.create(parsed);
    return normalizeKpiSnapshot(response.data);
  });

const updateKpiSnapshot = async (id, payload) =>
  execute(async () => {
    const parsedId = parseKpiSnapshotId(id);
    const parsed = parseKpiSnapshotPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.KPI_SNAPSHOTS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeKpiSnapshot({ id: parsedId, ...parsed });
    }
    const response = await kpiSnapshotApi.update(parsedId, parsed);
    return normalizeKpiSnapshot(response.data);
  });

const deleteKpiSnapshot = async (id) =>
  execute(async () => {
    const parsedId = parseKpiSnapshotId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.KPI_SNAPSHOTS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeKpiSnapshot({ id: parsedId });
    }
    const response = await kpiSnapshotApi.remove(parsedId);
    return normalizeKpiSnapshot(response.data);
  });

export {
  listKpiSnapshots,
  getKpiSnapshot,
  createKpiSnapshot,
  updateKpiSnapshot,
  deleteKpiSnapshot,
};
