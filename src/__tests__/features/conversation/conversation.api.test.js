/**
 * Conversation API Tests
 * File: conversation.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { apiClient, createCrudApi } from '@services/api';
import {
  addConversationMessageApi,
  addConversationParticipantApi,
  conversationApi,
  getConversationMessagesApi,
  getConversationParticipantsApi,
  removeConversationParticipantApi,
} from '@features/conversation/conversation.api';

jest.mock('@services/api', () => ({
  apiClient: jest.fn(),
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('conversation.api', () => {
  it('creates crud api with conversation endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.CONVERSATIONS);
    expect(conversationApi).toBeDefined();
  });

  it('fetches conversation participants', async () => {
    apiClient.mockResolvedValue({ data: [] });
    await getConversationParticipantsApi('1');
    expect(apiClient).toHaveBeenCalledWith({
      url: endpoints.CONVERSATIONS.GET_PARTICIPANTS('1'),
      method: 'GET',
    });
  });

  it('adds a conversation participant', async () => {
    const payload = { userId: 'u1' };
    apiClient.mockResolvedValue({ data: payload });
    await addConversationParticipantApi('1', payload);
    expect(apiClient).toHaveBeenCalledWith({
      url: endpoints.CONVERSATIONS.ADD_PARTICIPANT('1'),
      method: 'POST',
      body: payload,
    });
  });

  it('removes a conversation participant', async () => {
    apiClient.mockResolvedValue({ data: {} });
    await removeConversationParticipantApi('1', 'u1');
    expect(apiClient).toHaveBeenCalledWith({
      url: endpoints.CONVERSATIONS.REMOVE_PARTICIPANT('1', 'u1'),
      method: 'DELETE',
    });
  });

  it('fetches conversation messages', async () => {
    apiClient.mockResolvedValue({ data: [] });
    await getConversationMessagesApi('1');
    expect(apiClient).toHaveBeenCalledWith({
      url: endpoints.CONVERSATIONS.GET_MESSAGES('1'),
      method: 'GET',
    });
  });

  it('adds a conversation message', async () => {
    const payload = { text: 'hello' };
    apiClient.mockResolvedValue({ data: payload });
    await addConversationMessageApi('1', payload);
    expect(apiClient).toHaveBeenCalledWith({
      url: endpoints.CONVERSATIONS.ADD_MESSAGE('1'),
      method: 'POST',
      body: payload,
    });
  });
});
