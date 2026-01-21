/**
 * Radiology Result Model Tests
 * File: radiology-result.model.test.js
 */
import { normalizeRadiologyResult, normalizeRadiologyResultList } from '@features/radiology-result';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('radiology-result.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeRadiologyResult, normalizeRadiologyResultList);
  });
});
