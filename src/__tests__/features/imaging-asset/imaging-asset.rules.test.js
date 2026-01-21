/**
 * Imaging Asset Rules Tests
 * File: imaging-asset.rules.test.js
 */
import { parseImagingAssetId, parseImagingAssetListParams, parseImagingAssetPayload } from '@features/imaging-asset';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('imaging-asset.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseImagingAssetId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseImagingAssetPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseImagingAssetListParams);
  });
});
