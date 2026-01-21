/**
 * Discharge Summary Usecase Tests
 * File: discharge-summary.usecase.test.js
 */
import {
  listDischargeSummaries,
  getDischargeSummary,
  createDischargeSummary,
  updateDischargeSummary,
  deleteDischargeSummary,
} from '@features/discharge-summary';
import { dischargeSummaryApi } from '@features/discharge-summary/discharge-summary.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/discharge-summary/discharge-summary.api', () => ({
  dischargeSummaryApi: {
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

describe('discharge-summary.usecase', () => {
  beforeEach(() => {
    dischargeSummaryApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    dischargeSummaryApi.get.mockResolvedValue({ data: { id: '1' } });
    dischargeSummaryApi.create.mockResolvedValue({ data: { id: '1' } });
    dischargeSummaryApi.update.mockResolvedValue({ data: { id: '1' } });
    dischargeSummaryApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listDischargeSummaries,
      get: getDischargeSummary,
      create: createDischargeSummary,
      update: updateDischargeSummary,
      remove: deleteDischargeSummary,
    },
    { queueRequestIfOffline }
  );
});
