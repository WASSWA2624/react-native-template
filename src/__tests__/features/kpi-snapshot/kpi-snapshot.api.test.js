/**
 * KPI Snapshot API Tests
 * File: kpi-snapshot.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { kpiSnapshotApi } from '@features/kpi-snapshot/kpi-snapshot.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('kpi-snapshot.api', () => {
  it('creates crud api with kpi snapshot endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.KPI_SNAPSHOTS);
    expect(kpiSnapshotApi).toBeDefined();
  });
});
