/**
 * Bed Assignment Model Tests
 * File: bed-assignment.model.test.js
 */
import { normalizeBedAssignment, normalizeBedAssignmentList } from '@features/bed-assignment';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('bed-assignment.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeBedAssignment, normalizeBedAssignmentList);
  });
});
