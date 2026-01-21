/**
 * Asset Model Tests
 * File: asset.model.test.js
 */
import { normalizeAsset, normalizeAssetList } from '@features/asset';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('asset.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeAsset, normalizeAssetList);
  });
});
