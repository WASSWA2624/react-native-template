/**
 * Nursing Note Model Tests
 * File: nursing-note.model.test.js
 */
import { normalizeNursingNote, normalizeNursingNoteList } from '@features/nursing-note';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('nursing-note.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeNursingNote, normalizeNursingNoteList);
  });
});
