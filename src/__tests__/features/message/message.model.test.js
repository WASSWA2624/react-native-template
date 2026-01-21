/**
 * Message Model Tests
 * File: message.model.test.js
 */
import { normalizeMessage, normalizeMessageList } from '@features/message';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('message.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeMessage, normalizeMessageList);
  });
});
