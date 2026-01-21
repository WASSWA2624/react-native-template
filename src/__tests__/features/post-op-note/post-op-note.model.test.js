/**
 * Post-Op Note Model Tests
 * File: post-op-note.model.test.js
 */
import { normalizePostOpNote, normalizePostOpNoteList } from '@features/post-op-note';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('post-op-note.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizePostOpNote, normalizePostOpNoteList);
  });
});
