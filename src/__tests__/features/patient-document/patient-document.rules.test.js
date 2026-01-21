/**
 * Patient Document Rules Tests
 * File: patient-document.rules.test.js
 */
import {
  parsePatientDocumentId,
  parsePatientDocumentListParams,
  parsePatientDocumentPayload,
} from '@features/patient-document';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('patient-document.rules', () => {
  it('parses ids', () => {
    expectIdParser(parsePatientDocumentId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parsePatientDocumentPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parsePatientDocumentListParams);
  });
});
