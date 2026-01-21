/**
 * Procedure Model Tests
 * File: procedure.model.test.js
 */
import { normalizeProcedure, normalizeProcedureList } from '@features/procedure';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('procedure.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeProcedure, normalizeProcedureList);
  });
});
