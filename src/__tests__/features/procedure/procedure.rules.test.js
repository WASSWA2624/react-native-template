/**
 * Procedure Rules Tests
 * File: procedure.rules.test.js
 */
import { parseProcedureId, parseProcedureListParams, parseProcedurePayload } from '@features/procedure';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('procedure.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseProcedureId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseProcedurePayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseProcedureListParams);
  });
});
