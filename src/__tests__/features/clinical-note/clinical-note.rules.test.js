/**
 * Clinical Note Rules Tests
 * File: clinical-note.rules.test.js
 */
import { parseClinicalNoteId, parseClinicalNoteListParams, parseClinicalNotePayload } from '@features/clinical-note';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('clinical-note.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseClinicalNoteId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseClinicalNotePayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseClinicalNoteListParams);
  });
});
