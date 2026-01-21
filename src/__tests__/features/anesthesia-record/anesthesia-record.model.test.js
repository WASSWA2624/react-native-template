/**
 * Anesthesia Record Model Tests
 * File: anesthesia-record.model.test.js
 */
import { normalizeAnesthesiaRecord, normalizeAnesthesiaRecordList } from '@features/anesthesia-record';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('anesthesia-record.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeAnesthesiaRecord, normalizeAnesthesiaRecordList);
  });
});
