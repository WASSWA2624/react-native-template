/**
 * Module Rules Tests
 * File: module.rules.test.js
 */
import { parseModuleId, parseModuleListParams, parseModulePayload } from '@features/module';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('module.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseModuleId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseModulePayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseModuleListParams);
  });
});
