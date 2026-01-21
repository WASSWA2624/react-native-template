/**
 * Imaging Study Rules Tests
 * File: imaging-study.rules.test.js
 */
import { parseImagingStudyId, parseImagingStudyListParams, parseImagingStudyPayload } from '@features/imaging-study';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('imaging-study.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseImagingStudyId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseImagingStudyPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseImagingStudyListParams);
  });
});
