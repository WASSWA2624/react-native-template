/**
 * Asset Service Log Model Tests
 * File: asset-service-log.model.test.js
 */
import {
  normalizeAssetServiceLog,
  normalizeAssetServiceLogList,
} from '@features/asset-service-log';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('asset-service-log.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeAssetServiceLog, normalizeAssetServiceLogList);
  });
});
