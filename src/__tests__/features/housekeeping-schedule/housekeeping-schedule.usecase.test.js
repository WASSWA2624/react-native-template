/**
 * Housekeeping Schedule Usecase Tests
 * File: housekeeping-schedule.usecase.test.js
 */
import {
  listHousekeepingSchedules,
  getHousekeepingSchedule,
  createHousekeepingSchedule,
  updateHousekeepingSchedule,
  deleteHousekeepingSchedule,
} from '@features/housekeeping-schedule';
import { housekeepingScheduleApi } from '@features/housekeeping-schedule/housekeeping-schedule.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/housekeeping-schedule/housekeeping-schedule.api', () => ({
  housekeepingScheduleApi: {
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  },
}));

jest.mock('@offline/request', () => ({
  queueRequestIfOffline: jest.fn(),
}));

describe('housekeeping-schedule.usecase', () => {
  beforeEach(() => {
    housekeepingScheduleApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    housekeepingScheduleApi.get.mockResolvedValue({ data: { id: '1' } });
    housekeepingScheduleApi.create.mockResolvedValue({ data: { id: '1' } });
    housekeepingScheduleApi.update.mockResolvedValue({ data: { id: '1' } });
    housekeepingScheduleApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listHousekeepingSchedules,
      get: getHousekeepingSchedule,
      create: createHousekeepingSchedule,
      update: updateHousekeepingSchedule,
      remove: deleteHousekeepingSchedule,
    },
    { queueRequestIfOffline }
  );
});
