/**
 * Conversation Usecase Tests
 * File: conversation.usecase.test.js
 */
import {
  addConversationMessage,
  addConversationParticipant,
  createConversation,
  deleteConversation,
  getConversation,
  listConversationMessages,
  listConversationParticipants,
  listConversations,
  removeConversationParticipant,
  updateConversation,
} from '@features/conversation';
import {
  addConversationMessageApi,
  addConversationParticipantApi,
  conversationApi,
  getConversationMessagesApi,
  getConversationParticipantsApi,
  removeConversationParticipantApi,
} from '@features/conversation/conversation.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/conversation/conversation.api', () => ({
  conversationApi: {
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  },
  getConversationParticipantsApi: jest.fn(),
  addConversationParticipantApi: jest.fn(),
  removeConversationParticipantApi: jest.fn(),
  getConversationMessagesApi: jest.fn(),
  addConversationMessageApi: jest.fn(),
}));

jest.mock('@offline/request', () => ({
  queueRequestIfOffline: jest.fn(),
}));

describe('conversation.usecase', () => {
  beforeEach(() => {
    conversationApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    conversationApi.get.mockResolvedValue({ data: { id: '1' } });
    conversationApi.create.mockResolvedValue({ data: { id: '1' } });
    conversationApi.update.mockResolvedValue({ data: { id: '1' } });
    conversationApi.remove.mockResolvedValue({ data: { id: '1' } });
    getConversationParticipantsApi.mockResolvedValue({ data: [{ id: 'p1' }] });
    getConversationMessagesApi.mockResolvedValue({ data: [{ id: 'm1' }] });
    addConversationParticipantApi.mockResolvedValue({ data: { id: 'p1' } });
    removeConversationParticipantApi.mockResolvedValue({ data: { id: 'p1' } });
    addConversationMessageApi.mockResolvedValue({ data: { id: 'm1' } });
  });

  runCrudUsecaseTests(
    {
      list: listConversations,
      get: getConversation,
      create: createConversation,
      update: updateConversation,
      remove: deleteConversation,
      extraActions: [
        { fn: listConversationParticipants, args: ['1'] },
        { fn: listConversationMessages, args: ['1'] },
      ],
    },
    { queueRequestIfOffline }
  );

  it('adds/removes participants and messages online', async () => {
    queueRequestIfOffline.mockResolvedValue(false);
    await expect(addConversationParticipant('1', { userId: 'u1' })).resolves.toEqual({ id: 'p1' });
    await expect(removeConversationParticipant('1', 'u1')).resolves.toEqual({ id: 'p1' });
    await expect(addConversationMessage('1', { text: 'hi' })).resolves.toEqual({ id: 'm1' });
  });

  it('queues participant and message writes when offline', async () => {
    queueRequestIfOffline.mockResolvedValue(true);
    await expect(addConversationParticipant('1', { userId: 'u1' })).resolves.toEqual({
      id: '1',
      userId: 'u1',
    });
    await expect(removeConversationParticipant('1', 'u1')).resolves.toEqual({
      id: '1',
      userId: 'u1',
    });
    await expect(addConversationMessage('1', { text: 'hi' })).resolves.toEqual({
      id: '1',
      text: 'hi',
    });
  });
});
