/**
 * Coverage Plan Rules Tests
 * File: coverage-plan.rules.test.js
 */
import {
  parseCoveragePlanId,
  parseCoveragePlanListParams,
  parseCoveragePlanPayload,
} from '@features/coverage-plan';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('coverage-plan.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseCoveragePlanId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseCoveragePlanPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseCoveragePlanListParams);
  });
});
