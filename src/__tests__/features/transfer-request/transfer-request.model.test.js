/**
 * Transfer Request Model Tests
 * File: transfer-request.model.test.js
 */
import { normalizeTransferRequest, normalizeTransferRequestList } from '@features/transfer-request';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('transfer-request.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeTransferRequest, normalizeTransferRequestList);
  });
});
