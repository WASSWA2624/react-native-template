/**
 * Module Model Tests
 * File: module.model.test.js
 */
import { normalizeModule, normalizeModuleList } from '@features/module';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('module.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeModule, normalizeModuleList);
  });
});
