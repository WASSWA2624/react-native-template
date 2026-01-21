/**
 * Conversation Use Cases
 * File: conversation.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import {
  addConversationMessageApi,
  addConversationParticipantApi,
  conversationApi,
  getConversationMessagesApi,
  getConversationParticipantsApi,
  removeConversationParticipantApi,
} from './conversation.api';
import { normalizeConversation, normalizeConversationList } from './conversation.model';
import {
  parseConversationId,
  parseConversationListParams,
  parseConversationMessagePayload,
  parseConversationParticipantId,
  parseConversationParticipantPayload,
  parseConversationPayload,
} from './conversation.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listConversations = async (params = {}) =>
  execute(async () => {
    const parsed = parseConversationListParams(params);
    const response = await conversationApi.list(parsed);
    return normalizeConversationList(response.data);
  });

const getConversation = async (id) =>
  execute(async () => {
    const parsedId = parseConversationId(id);
    const response = await conversationApi.get(parsedId);
    return normalizeConversation(response.data);
  });

const createConversation = async (payload) =>
  execute(async () => {
    const parsed = parseConversationPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.CONVERSATIONS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeConversation(parsed);
    }
    const response = await conversationApi.create(parsed);
    return normalizeConversation(response.data);
  });

const updateConversation = async (id, payload) =>
  execute(async () => {
    const parsedId = parseConversationId(id);
    const parsed = parseConversationPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.CONVERSATIONS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeConversation({ id: parsedId, ...parsed });
    }
    const response = await conversationApi.update(parsedId, parsed);
    return normalizeConversation(response.data);
  });

const deleteConversation = async (id) =>
  execute(async () => {
    const parsedId = parseConversationId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.CONVERSATIONS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeConversation({ id: parsedId });
    }
    const response = await conversationApi.remove(parsedId);
    return normalizeConversation(response.data);
  });

const listConversationParticipants = async (id) =>
  execute(async () => {
    const parsedId = parseConversationId(id);
    const response = await getConversationParticipantsApi(parsedId);
    return normalizeConversationList(response.data);
  });

const addConversationParticipant = async (id, payload) =>
  execute(async () => {
    const parsedId = parseConversationId(id);
    const parsed = parseConversationParticipantPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.CONVERSATIONS.ADD_PARTICIPANT(parsedId),
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeConversation({ id: parsedId, ...parsed });
    }
    const response = await addConversationParticipantApi(parsedId, parsed);
    return normalizeConversation(response.data);
  });

const removeConversationParticipant = async (id, userId) =>
  execute(async () => {
    const parsedId = parseConversationId(id);
    const parsedUserId = parseConversationParticipantId(userId);
    const queued = await queueRequestIfOffline({
      url: endpoints.CONVERSATIONS.REMOVE_PARTICIPANT(parsedId, parsedUserId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeConversation({ id: parsedId, userId: parsedUserId });
    }
    const response = await removeConversationParticipantApi(parsedId, parsedUserId);
    return normalizeConversation(response.data);
  });

const listConversationMessages = async (id) =>
  execute(async () => {
    const parsedId = parseConversationId(id);
    const response = await getConversationMessagesApi(parsedId);
    return normalizeConversationList(response.data);
  });

const addConversationMessage = async (id, payload) =>
  execute(async () => {
    const parsedId = parseConversationId(id);
    const parsed = parseConversationMessagePayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.CONVERSATIONS.ADD_MESSAGE(parsedId),
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeConversation({ id: parsedId, ...parsed });
    }
    const response = await addConversationMessageApi(parsedId, parsed);
    return normalizeConversation(response.data);
  });

export {
  listConversations,
  getConversation,
  createConversation,
  updateConversation,
  deleteConversation,
  listConversationParticipants,
  addConversationParticipant,
  removeConversationParticipant,
  listConversationMessages,
  addConversationMessage,
};
