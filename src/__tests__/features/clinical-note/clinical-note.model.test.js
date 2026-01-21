/**
 * Clinical Note Model Tests
 * File: clinical-note.model.test.js
 */
import { normalizeClinicalNote, normalizeClinicalNoteList } from '@features/clinical-note';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('clinical-note.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeClinicalNote, normalizeClinicalNoteList);
  });
});
