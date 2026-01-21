/**
 * Care Plan Rules Tests
 * File: care-plan.rules.test.js
 */
import { parseCarePlanId, parseCarePlanListParams, parseCarePlanPayload } from '@features/care-plan';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('care-plan.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseCarePlanId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseCarePlanPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseCarePlanListParams);
  });
});
