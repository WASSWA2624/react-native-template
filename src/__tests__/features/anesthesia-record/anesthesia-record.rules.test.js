/**
 * Anesthesia Record Rules Tests
 * File: anesthesia-record.rules.test.js
 */
import {
  parseAnesthesiaRecordId,
  parseAnesthesiaRecordListParams,
  parseAnesthesiaRecordPayload,
} from '@features/anesthesia-record';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('anesthesia-record.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseAnesthesiaRecordId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseAnesthesiaRecordPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseAnesthesiaRecordListParams);
  });
});
