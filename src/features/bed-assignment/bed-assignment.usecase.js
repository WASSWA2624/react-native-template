/**
 * Bed Assignment Use Cases
 * File: bed-assignment.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { bedAssignmentApi } from './bed-assignment.api';
import { normalizeBedAssignment, normalizeBedAssignmentList } from './bed-assignment.model';
import { parseBedAssignmentId, parseBedAssignmentListParams, parseBedAssignmentPayload } from './bed-assignment.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listBedAssignments = async (params = {}) =>
  execute(async () => {
    const parsed = parseBedAssignmentListParams(params);
    const response = await bedAssignmentApi.list(parsed);
    return normalizeBedAssignmentList(response.data);
  });

const getBedAssignment = async (id) =>
  execute(async () => {
    const parsedId = parseBedAssignmentId(id);
    const response = await bedAssignmentApi.get(parsedId);
    return normalizeBedAssignment(response.data);
  });

const createBedAssignment = async (payload) =>
  execute(async () => {
    const parsed = parseBedAssignmentPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.BED_ASSIGNMENTS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeBedAssignment(parsed);
    }
    const response = await bedAssignmentApi.create(parsed);
    return normalizeBedAssignment(response.data);
  });

const updateBedAssignment = async (id, payload) =>
  execute(async () => {
    const parsedId = parseBedAssignmentId(id);
    const parsed = parseBedAssignmentPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.BED_ASSIGNMENTS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeBedAssignment({ id: parsedId, ...parsed });
    }
    const response = await bedAssignmentApi.update(parsedId, parsed);
    return normalizeBedAssignment(response.data);
  });

const deleteBedAssignment = async (id) =>
  execute(async () => {
    const parsedId = parseBedAssignmentId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.BED_ASSIGNMENTS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeBedAssignment({ id: parsedId });
    }
    const response = await bedAssignmentApi.remove(parsedId);
    return normalizeBedAssignment(response.data);
  });

export { listBedAssignments, getBedAssignment, createBedAssignment, updateBedAssignment, deleteBedAssignment };
