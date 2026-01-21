/**
 * Bed Assignment Usecase Tests
 * File: bed-assignment.usecase.test.js
 */
import {
  listBedAssignments,
  getBedAssignment,
  createBedAssignment,
  updateBedAssignment,
  deleteBedAssignment,
} from '@features/bed-assignment';
import { bedAssignmentApi } from '@features/bed-assignment/bed-assignment.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/bed-assignment/bed-assignment.api', () => ({
  bedAssignmentApi: {
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

describe('bed-assignment.usecase', () => {
  beforeEach(() => {
    bedAssignmentApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    bedAssignmentApi.get.mockResolvedValue({ data: { id: '1' } });
    bedAssignmentApi.create.mockResolvedValue({ data: { id: '1' } });
    bedAssignmentApi.update.mockResolvedValue({ data: { id: '1' } });
    bedAssignmentApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listBedAssignments,
      get: getBedAssignment,
      create: createBedAssignment,
      update: updateBedAssignment,
      remove: deleteBedAssignment,
    },
    { queueRequestIfOffline }
  );
});
