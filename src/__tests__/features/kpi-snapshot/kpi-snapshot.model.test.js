/**
 * KPI Snapshot Model Tests
 * File: kpi-snapshot.model.test.js
 */
import { normalizeKpiSnapshot, normalizeKpiSnapshotList } from '@features/kpi-snapshot';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('kpi-snapshot.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeKpiSnapshot, normalizeKpiSnapshotList);
  });
});
