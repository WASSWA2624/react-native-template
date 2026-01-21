/**
 * KPI Snapshot Rules
 * File: kpi-snapshot.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseKpiSnapshotId = (value) => parseId(value);
const parseKpiSnapshotPayload = (value) => parsePayload(value);
const parseKpiSnapshotListParams = (value) => parseListParams(value);

export { parseKpiSnapshotId, parseKpiSnapshotPayload, parseKpiSnapshotListParams };
