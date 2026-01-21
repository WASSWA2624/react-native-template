/**
 * PACS Link Rules Tests
 * File: pacs-link.rules.test.js
 */
import { parsePacsLinkId, parsePacsLinkListParams, parsePacsLinkPayload } from '@features/pacs-link';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('pacs-link.rules', () => {
  it('parses ids', () => {
    expectIdParser(parsePacsLinkId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parsePacsLinkPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parsePacsLinkListParams);
  });
});
