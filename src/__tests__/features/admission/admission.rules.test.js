/**
 * Admission Rules Tests
 * File: admission.rules.test.js
 */
import { parseAdmissionId, parseAdmissionListParams, parseAdmissionPayload } from '@features/admission';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('admission.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseAdmissionId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseAdmissionPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseAdmissionListParams);
  });
});
