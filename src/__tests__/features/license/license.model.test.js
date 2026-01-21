/**
 * License Model Tests
 * File: license.model.test.js
 */
import { normalizeLicense, normalizeLicenseList } from '@features/license';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('license.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeLicense, normalizeLicenseList);
  });
});
