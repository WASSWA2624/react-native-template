/**
 * Transfer Request Rules Tests
 * File: transfer-request.rules.test.js
 */
import {
  parseTransferRequestId,
  parseTransferRequestListParams,
  parseTransferRequestPayload,
} from '@features/transfer-request';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('transfer-request.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseTransferRequestId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseTransferRequestPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseTransferRequestListParams);
  });
});
