/**
 * Conversation Rules
 * File: conversation.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseConversationId = (value) => parseId(value);
const parseConversationPayload = (value) => parsePayload(value);
const parseConversationListParams = (value) => parseListParams(value);
const parseConversationParticipantId = (value) => parseId(value);
const parseConversationParticipantPayload = (value) => parsePayload(value);
const parseConversationMessagePayload = (value) => parsePayload(value);

export {
  parseConversationId,
  parseConversationPayload,
  parseConversationListParams,
  parseConversationParticipantId,
  parseConversationParticipantPayload,
  parseConversationMessagePayload,
};
