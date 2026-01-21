/**
 * Radiology Order Model Tests
 * File: radiology-order.model.test.js
 */
import { normalizeRadiologyOrder, normalizeRadiologyOrderList } from '@features/radiology-order';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('radiology-order.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeRadiologyOrder, normalizeRadiologyOrderList);
  });
});
