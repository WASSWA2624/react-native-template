/**
 * Asset Rules Tests
 * File: asset.rules.test.js
 */
import { parseAssetId, parseAssetListParams, parseAssetPayload } from '@features/asset';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('asset.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseAssetId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseAssetPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseAssetListParams);
  });
});
