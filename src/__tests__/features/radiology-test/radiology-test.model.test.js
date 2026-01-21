/**
 * Radiology Test Model Tests
 * File: radiology-test.model.test.js
 */
import { normalizeRadiologyTest, normalizeRadiologyTestList } from '@features/radiology-test';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('radiology-test.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeRadiologyTest, normalizeRadiologyTestList);
  });
});
