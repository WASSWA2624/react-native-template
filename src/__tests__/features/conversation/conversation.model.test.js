/**
 * Conversation Model Tests
 * File: conversation.model.test.js
 */
import { normalizeConversation, normalizeConversationList } from '@features/conversation';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('conversation.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeConversation, normalizeConversationList);
  });
});
