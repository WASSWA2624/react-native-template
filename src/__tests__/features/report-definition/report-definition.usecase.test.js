/**
 * Report Definition Usecase Tests
 * File: report-definition.usecase.test.js
 */
import {
  listReportDefinitions,
  getReportDefinition,
  createReportDefinition,
  updateReportDefinition,
  deleteReportDefinition,
} from '@features/report-definition';
import { reportDefinitionApi } from '@features/report-definition/report-definition.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/report-definition/report-definition.api', () => ({
  reportDefinitionApi: {
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

describe('report-definition.usecase', () => {
  beforeEach(() => {
    reportDefinitionApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    reportDefinitionApi.get.mockResolvedValue({ data: { id: '1' } });
    reportDefinitionApi.create.mockResolvedValue({ data: { id: '1' } });
    reportDefinitionApi.update.mockResolvedValue({ data: { id: '1' } });
    reportDefinitionApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listReportDefinitions,
      get: getReportDefinition,
      create: createReportDefinition,
      update: updateReportDefinition,
      remove: deleteReportDefinition,
    },
    { queueRequestIfOffline }
  );
});
