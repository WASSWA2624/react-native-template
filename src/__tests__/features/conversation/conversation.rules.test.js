/**
 * Conversation Rules Tests
 * File: conversation.rules.test.js
 */
import {
  parseConversationId,
  parseConversationListParams,
  parseConversationMessagePayload,
  parseConversationParticipantId,
  parseConversationParticipantPayload,
  parseConversationPayload,
} from '@features/conversation';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('conversation.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseConversationId);
    expectIdParser(parseConversationParticipantId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseConversationPayload);
    expectPayloadParser(parseConversationParticipantPayload);
    expectPayloadParser(parseConversationMessagePayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseConversationListParams);
  });
});
