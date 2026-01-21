/**
 * KPI Snapshot Model
 * File: kpi-snapshot.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeKpiSnapshot = (value) => normalize(value);
const normalizeKpiSnapshotList = (value) => normalizeList(value);

export { normalizeKpiSnapshot, normalizeKpiSnapshotList };
