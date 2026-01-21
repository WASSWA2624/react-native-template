/**
 * Maintenance Request Usecase Tests
 * File: maintenance-request.usecase.test.js
 */
import {
  listMaintenanceRequests,
  getMaintenanceRequest,
  createMaintenanceRequest,
  updateMaintenanceRequest,
  deleteMaintenanceRequest,
} from '@features/maintenance-request';
import { maintenanceRequestApi } from '@features/maintenance-request/maintenance-request.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/maintenance-request/maintenance-request.api', () => ({
  maintenanceRequestApi: {
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

describe('maintenance-request.usecase', () => {
  beforeEach(() => {
    maintenanceRequestApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    maintenanceRequestApi.get.mockResolvedValue({ data: { id: '1' } });
    maintenanceRequestApi.create.mockResolvedValue({ data: { id: '1' } });
    maintenanceRequestApi.update.mockResolvedValue({ data: { id: '1' } });
    maintenanceRequestApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listMaintenanceRequests,
      get: getMaintenanceRequest,
      create: createMaintenanceRequest,
      update: updateMaintenanceRequest,
      remove: deleteMaintenanceRequest,
    },
    { queueRequestIfOffline }
  );
});
