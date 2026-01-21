/**
 * KPI Snapshot Rules Tests
 * File: kpi-snapshot.rules.test.js
 */
import {
  parseKpiSnapshotId,
  parseKpiSnapshotListParams,
  parseKpiSnapshotPayload,
} from '@features/kpi-snapshot';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('kpi-snapshot.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseKpiSnapshotId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseKpiSnapshotPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseKpiSnapshotListParams);
  });
});
