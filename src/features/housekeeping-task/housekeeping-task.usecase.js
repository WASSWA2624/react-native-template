/**
 * Housekeeping Task Use Cases
 * File: housekeeping-task.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { housekeepingTaskApi } from './housekeeping-task.api';
import { normalizeHousekeepingTask, normalizeHousekeepingTaskList } from './housekeeping-task.model';
import {
  parseHousekeepingTaskId,
  parseHousekeepingTaskListParams,
  parseHousekeepingTaskPayload,
} from './housekeeping-task.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listHousekeepingTasks = async (params = {}) =>
  execute(async () => {
    const parsed = parseHousekeepingTaskListParams(params);
    const response = await housekeepingTaskApi.list(parsed);
    return normalizeHousekeepingTaskList(response.data);
  });

const getHousekeepingTask = async (id) =>
  execute(async () => {
    const parsedId = parseHousekeepingTaskId(id);
    const response = await housekeepingTaskApi.get(parsedId);
    return normalizeHousekeepingTask(response.data);
  });

const createHousekeepingTask = async (payload) =>
  execute(async () => {
    const parsed = parseHousekeepingTaskPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.HOUSEKEEPING_TASKS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeHousekeepingTask(parsed);
    }
    const response = await housekeepingTaskApi.create(parsed);
    return normalizeHousekeepingTask(response.data);
  });

const updateHousekeepingTask = async (id, payload) =>
  execute(async () => {
    const parsedId = parseHousekeepingTaskId(id);
    const parsed = parseHousekeepingTaskPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.HOUSEKEEPING_TASKS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeHousekeepingTask({ id: parsedId, ...parsed });
    }
    const response = await housekeepingTaskApi.update(parsedId, parsed);
    return normalizeHousekeepingTask(response.data);
  });

const deleteHousekeepingTask = async (id) =>
  execute(async () => {
    const parsedId = parseHousekeepingTaskId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.HOUSEKEEPING_TASKS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeHousekeepingTask({ id: parsedId });
    }
    const response = await housekeepingTaskApi.remove(parsedId);
    return normalizeHousekeepingTask(response.data);
  });

export {
  listHousekeepingTasks,
  getHousekeepingTask,
  createHousekeepingTask,
  updateHousekeepingTask,
  deleteHousekeepingTask,
};
