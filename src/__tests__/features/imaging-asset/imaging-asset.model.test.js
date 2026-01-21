/**
 * Imaging Asset Model Tests
 * File: imaging-asset.model.test.js
 */
import { normalizeImagingAsset, normalizeImagingAssetList } from '@features/imaging-asset';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('imaging-asset.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeImagingAsset, normalizeImagingAssetList);
  });
});
