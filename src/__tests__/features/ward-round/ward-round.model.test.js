/**
 * Ward Round Model Tests
 * File: ward-round.model.test.js
 */
import { normalizeWardRound, normalizeWardRoundList } from '@features/ward-round';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('ward-round.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeWardRound, normalizeWardRoundList);
  });
});
