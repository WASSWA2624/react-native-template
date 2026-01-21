/**
 * KPI Snapshot API
 * File: kpi-snapshot.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const kpiSnapshotApi = createCrudApi(endpoints.KPI_SNAPSHOTS);

export { kpiSnapshotApi };
