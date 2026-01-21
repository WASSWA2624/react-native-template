/**
 * Vital Sign Model Tests
 * File: vital-sign.model.test.js
 */
import { normalizeVitalSign, normalizeVitalSignList } from '@features/vital-sign';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('vital-sign.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeVitalSign, normalizeVitalSignList);
  });
});
