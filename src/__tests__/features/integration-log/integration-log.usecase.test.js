/**
 * Integration Log Usecase Tests
 * File: integration-log.usecase.test.js
 */
import {
  listIntegrationLogs,
  getIntegrationLog,
  createIntegrationLog,
  updateIntegrationLog,
  deleteIntegrationLog,
} from '@features/integration-log';
import { integrationLogApi } from '@features/integration-log/integration-log.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/integration-log/integration-log.api', () => ({
  integrationLogApi: {
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

describe('integration-log.usecase', () => {
  beforeEach(() => {
    integrationLogApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    integrationLogApi.get.mockResolvedValue({ data: { id: '1' } });
    integrationLogApi.create.mockResolvedValue({ data: { id: '1' } });
    integrationLogApi.update.mockResolvedValue({ data: { id: '1' } });
    integrationLogApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listIntegrationLogs,
      get: getIntegrationLog,
      create: createIntegrationLog,
      update: updateIntegrationLog,
      remove: deleteIntegrationLog,
    },
    { queueRequestIfOffline }
  );
});
