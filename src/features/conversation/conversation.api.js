/**
 * Conversation API
 * File: conversation.api.js
 */
import { endpoints } from '@config/endpoints';
import { apiClient, createCrudApi } from '@services/api';

const conversationApi = createCrudApi(endpoints.CONVERSATIONS);

const getConversationParticipantsApi = (id) =>
  apiClient({
    url: endpoints.CONVERSATIONS.GET_PARTICIPANTS(id),
    method: 'GET',
  });

const addConversationParticipantApi = (id, payload) =>
  apiClient({
    url: endpoints.CONVERSATIONS.ADD_PARTICIPANT(id),
    method: 'POST',
    body: payload,
  });

const removeConversationParticipantApi = (id, userId) =>
  apiClient({
    url: endpoints.CONVERSATIONS.REMOVE_PARTICIPANT(id, userId),
    method: 'DELETE',
  });

const getConversationMessagesApi = (id) =>
  apiClient({
    url: endpoints.CONVERSATIONS.GET_MESSAGES(id),
    method: 'GET',
  });

const addConversationMessageApi = (id, payload) =>
  apiClient({
    url: endpoints.CONVERSATIONS.ADD_MESSAGE(id),
    method: 'POST',
    body: payload,
  });

export {
  conversationApi,
  getConversationParticipantsApi,
  addConversationParticipantApi,
  removeConversationParticipantApi,
  getConversationMessagesApi,
  addConversationMessageApi,
};
