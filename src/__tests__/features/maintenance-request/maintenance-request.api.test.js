/**
 * Maintenance Request API Tests
 * File: maintenance-request.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { maintenanceRequestApi } from '@features/maintenance-request/maintenance-request.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('maintenance-request.api', () => {
  it('creates crud api with maintenance request endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.MAINTENANCE_REQUESTS);
    expect(maintenanceRequestApi).toBeDefined();
  });
});
