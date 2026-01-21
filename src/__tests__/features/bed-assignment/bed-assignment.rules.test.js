/**
 * Bed Assignment Rules Tests
 * File: bed-assignment.rules.test.js
 */
import { parseBedAssignmentId, parseBedAssignmentListParams, parseBedAssignmentPayload } from '@features/bed-assignment';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('bed-assignment.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseBedAssignmentId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseBedAssignmentPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseBedAssignmentListParams);
  });
});
