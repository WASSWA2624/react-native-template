/**
 * Theatre Case Model Tests
 * File: theatre-case.model.test.js
 */
import { normalizeTheatreCase, normalizeTheatreCaseList } from '@features/theatre-case';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('theatre-case.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeTheatreCase, normalizeTheatreCaseList);
  });
});
