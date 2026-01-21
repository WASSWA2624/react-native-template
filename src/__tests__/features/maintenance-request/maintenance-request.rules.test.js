/**
 * Maintenance Request Rules Tests
 * File: maintenance-request.rules.test.js
 */
import {
  parseMaintenanceRequestId,
  parseMaintenanceRequestListParams,
  parseMaintenanceRequestPayload,
} from '@features/maintenance-request';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('maintenance-request.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseMaintenanceRequestId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseMaintenanceRequestPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseMaintenanceRequestListParams);
  });
});
