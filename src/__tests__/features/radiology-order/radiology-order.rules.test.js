/**
 * Radiology Order Rules Tests
 * File: radiology-order.rules.test.js
 */
import { parseRadiologyOrderId, parseRadiologyOrderListParams, parseRadiologyOrderPayload } from '@features/radiology-order';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('radiology-order.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseRadiologyOrderId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseRadiologyOrderPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseRadiologyOrderListParams);
  });
});
