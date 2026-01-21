/**
 * Clinical Alert Rules Tests
 * File: clinical-alert.rules.test.js
 */
import {
  parseClinicalAlertId,
  parseClinicalAlertListParams,
  parseClinicalAlertPayload,
} from '@features/clinical-alert';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('clinical-alert.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseClinicalAlertId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseClinicalAlertPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseClinicalAlertListParams);
  });
});
