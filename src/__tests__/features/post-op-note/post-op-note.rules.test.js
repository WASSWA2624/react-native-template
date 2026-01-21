/**
 * Post-Op Note Rules Tests
 * File: post-op-note.rules.test.js
 */
import { parsePostOpNoteId, parsePostOpNoteListParams, parsePostOpNotePayload } from '@features/post-op-note';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('post-op-note.rules', () => {
  it('parses ids', () => {
    expectIdParser(parsePostOpNoteId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parsePostOpNotePayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parsePostOpNoteListParams);
  });
});
