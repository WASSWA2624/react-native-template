/**
 * Follow Up Model Tests
 * File: follow-up.model.test.js
 */
import { normalizeFollowUp, normalizeFollowUpList } from '@features/follow-up';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('follow-up.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeFollowUp, normalizeFollowUpList);
  });
});
