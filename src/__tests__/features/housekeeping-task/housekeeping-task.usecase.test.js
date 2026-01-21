/**
 * Housekeeping Task Usecase Tests
 * File: housekeeping-task.usecase.test.js
 */
import {
  listHousekeepingTasks,
  getHousekeepingTask,
  createHousekeepingTask,
  updateHousekeepingTask,
  deleteHousekeepingTask,
} from '@features/housekeeping-task';
import { housekeepingTaskApi } from '@features/housekeeping-task/housekeeping-task.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/housekeeping-task/housekeeping-task.api', () => ({
  housekeepingTaskApi: {
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

describe('housekeeping-task.usecase', () => {
  beforeEach(() => {
    housekeepingTaskApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    housekeepingTaskApi.get.mockResolvedValue({ data: { id: '1' } });
    housekeepingTaskApi.create.mockResolvedValue({ data: { id: '1' } });
    housekeepingTaskApi.update.mockResolvedValue({ data: { id: '1' } });
    housekeepingTaskApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listHousekeepingTasks,
      get: getHousekeepingTask,
      create: createHousekeepingTask,
      update: updateHousekeepingTask,
      remove: deleteHousekeepingTask,
    },
    { queueRequestIfOffline }
  );
});
