/**
 * Template Rules Tests
 * File: template.rules.test.js
 */
import { parseTemplateId, parseTemplateListParams, parseTemplatePayload } from '@features/template';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('template.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseTemplateId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseTemplatePayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseTemplateListParams);
  });
});
