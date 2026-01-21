/**
 * Template Variable Rules Tests
 * File: template-variable.rules.test.js
 */
import {
  parseTemplateVariableId,
  parseTemplateVariableListParams,
  parseTemplateVariablePayload,
} from '@features/template-variable';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('template-variable.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseTemplateVariableId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseTemplateVariablePayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseTemplateVariableListParams);
  });
});
