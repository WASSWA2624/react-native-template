/**
 * Nursing Note Rules Tests
 * File: nursing-note.rules.test.js
 */
import { parseNursingNoteId, parseNursingNoteListParams, parseNursingNotePayload } from '@features/nursing-note';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('nursing-note.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseNursingNoteId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseNursingNotePayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseNursingNoteListParams);
  });
});
