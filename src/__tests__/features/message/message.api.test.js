/**
 * Message API Tests
 * File: message.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { apiClient, createCrudApi } from '@services/api';
import { getMessageMediaApi, getMessagesByConversationApi, messageApi } from '@features/message/message.api';

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

describe('message.api', () => {
  it('creates crud api with message endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.MESSAGES);
    expect(messageApi).toBeDefined();
  });

  it('fetches messages by conversation', async () => {
    apiClient.mockResolvedValue({ data: [] });
    await getMessagesByConversationApi('1');
    expect(apiClient).toHaveBeenCalledWith({
      url: endpoints.MESSAGES.GET_BY_CONVERSATION('1'),
      method: 'GET',
    });
  });

  it('fetches message media', async () => {
    apiClient.mockResolvedValue({ data: {} });
    await getMessageMediaApi('1');
    expect(apiClient).toHaveBeenCalledWith({
      url: endpoints.MESSAGES.GET_MEDIA('1'),
      method: 'GET',
    });
  });
});
