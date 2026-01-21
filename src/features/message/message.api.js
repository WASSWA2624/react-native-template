/**
 * Message API
 * File: message.api.js
 */
import { endpoints } from '@config/endpoints';
import { apiClient, createCrudApi } from '@services/api';

const messageApi = createCrudApi(endpoints.MESSAGES);

const getMessagesByConversationApi = (conversationId) =>
  apiClient({
    url: endpoints.MESSAGES.GET_BY_CONVERSATION(conversationId),
    method: 'GET',
  });

const getMessageMediaApi = (id) =>
  apiClient({
    url: endpoints.MESSAGES.GET_MEDIA(id),
    method: 'GET',
  });

export { messageApi, getMessagesByConversationApi, getMessageMediaApi };
