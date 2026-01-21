/**
 * KPI Snapshot Usecase Tests
 * File: kpi-snapshot.usecase.test.js
 */
import {
  listKpiSnapshots,
  getKpiSnapshot,
  createKpiSnapshot,
  updateKpiSnapshot,
  deleteKpiSnapshot,
} from '@features/kpi-snapshot';
import { kpiSnapshotApi } from '@features/kpi-snapshot/kpi-snapshot.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/kpi-snapshot/kpi-snapshot.api', () => ({
  kpiSnapshotApi: {
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

describe('kpi-snapshot.usecase', () => {
  beforeEach(() => {
    kpiSnapshotApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    kpiSnapshotApi.get.mockResolvedValue({ data: { id: '1' } });
    kpiSnapshotApi.create.mockResolvedValue({ data: { id: '1' } });
    kpiSnapshotApi.update.mockResolvedValue({ data: { id: '1' } });
    kpiSnapshotApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listKpiSnapshots,
      get: getKpiSnapshot,
      create: createKpiSnapshot,
      update: updateKpiSnapshot,
      remove: deleteKpiSnapshot,
    },
    { queueRequestIfOffline }
  );
});
