/**
 * Integration Usecase Tests
 * File: integration.usecase.test.js
 */
import {
  listIntegrations,
  getIntegration,
  createIntegration,
  updateIntegration,
  deleteIntegration,
} from '@features/integration';
import { integrationApi } from '@features/integration/integration.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/integration/integration.api', () => ({
  integrationApi: {
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

describe('integration.usecase', () => {
  beforeEach(() => {
    integrationApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    integrationApi.get.mockResolvedValue({ data: { id: '1' } });
    integrationApi.create.mockResolvedValue({ data: { id: '1' } });
    integrationApi.update.mockResolvedValue({ data: { id: '1' } });
    integrationApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listIntegrations,
      get: getIntegration,
      create: createIntegration,
      update: updateIntegration,
      remove: deleteIntegration,
    },
    { queueRequestIfOffline }
  );
});
