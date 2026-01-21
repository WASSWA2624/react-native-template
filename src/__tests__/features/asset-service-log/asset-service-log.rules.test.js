/**
 * Asset Service Log Rules Tests
 * File: asset-service-log.rules.test.js
 */
import {
  parseAssetServiceLogId,
  parseAssetServiceLogListParams,
  parseAssetServiceLogPayload,
} from '@features/asset-service-log';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('asset-service-log.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseAssetServiceLogId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseAssetServiceLogPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseAssetServiceLogListParams);
  });
});
