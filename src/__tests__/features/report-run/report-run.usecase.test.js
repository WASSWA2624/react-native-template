/**
 * Report Run Usecase Tests
 * File: report-run.usecase.test.js
 */
import {
  listReportRuns,
  getReportRun,
  createReportRun,
  updateReportRun,
  deleteReportRun,
} from '@features/report-run';
import { reportRunApi } from '@features/report-run/report-run.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/report-run/report-run.api', () => ({
  reportRunApi: {
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

describe('report-run.usecase', () => {
  beforeEach(() => {
    reportRunApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    reportRunApi.get.mockResolvedValue({ data: { id: '1' } });
    reportRunApi.create.mockResolvedValue({ data: { id: '1' } });
    reportRunApi.update.mockResolvedValue({ data: { id: '1' } });
    reportRunApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listReportRuns,
      get: getReportRun,
      create: createReportRun,
      update: updateReportRun,
      remove: deleteReportRun,
    },
    { queueRequestIfOffline }
  );
});
