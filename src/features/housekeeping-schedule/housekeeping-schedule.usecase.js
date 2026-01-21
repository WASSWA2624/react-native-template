/**
 * Housekeeping Schedule Use Cases
 * File: housekeeping-schedule.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { housekeepingScheduleApi } from './housekeeping-schedule.api';
import {
  normalizeHousekeepingSchedule,
  normalizeHousekeepingScheduleList,
} from './housekeeping-schedule.model';
import {
  parseHousekeepingScheduleId,
  parseHousekeepingScheduleListParams,
  parseHousekeepingSchedulePayload,
} from './housekeeping-schedule.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listHousekeepingSchedules = async (params = {}) =>
  execute(async () => {
    const parsed = parseHousekeepingScheduleListParams(params);
    const response = await housekeepingScheduleApi.list(parsed);
    return normalizeHousekeepingScheduleList(response.data);
  });

const getHousekeepingSchedule = async (id) =>
  execute(async () => {
    const parsedId = parseHousekeepingScheduleId(id);
    const response = await housekeepingScheduleApi.get(parsedId);
    return normalizeHousekeepingSchedule(response.data);
  });

const createHousekeepingSchedule = async (payload) =>
  execute(async () => {
    const parsed = parseHousekeepingSchedulePayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.HOUSEKEEPING_SCHEDULES.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeHousekeepingSchedule(parsed);
    }
    const response = await housekeepingScheduleApi.create(parsed);
    return normalizeHousekeepingSchedule(response.data);
  });

const updateHousekeepingSchedule = async (id, payload) =>
  execute(async () => {
    const parsedId = parseHousekeepingScheduleId(id);
    const parsed = parseHousekeepingSchedulePayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.HOUSEKEEPING_SCHEDULES.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeHousekeepingSchedule({ id: parsedId, ...parsed });
    }
    const response = await housekeepingScheduleApi.update(parsedId, parsed);
    return normalizeHousekeepingSchedule(response.data);
  });

const deleteHousekeepingSchedule = async (id) =>
  execute(async () => {
    const parsedId = parseHousekeepingScheduleId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.HOUSEKEEPING_SCHEDULES.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeHousekeepingSchedule({ id: parsedId });
    }
    const response = await housekeepingScheduleApi.remove(parsedId);
    return normalizeHousekeepingSchedule(response.data);
  });

export {
  listHousekeepingSchedules,
  getHousekeepingSchedule,
  createHousekeepingSchedule,
  updateHousekeepingSchedule,
  deleteHousekeepingSchedule,
};
