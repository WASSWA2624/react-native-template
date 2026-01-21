/**
 * Message Usecase Tests
 * File: message.usecase.test.js
 */
import {
  createMessage,
  deleteMessage,
  getMessage,
  getMessageMedia,
  listMessages,
  listMessagesByConversation,
  updateMessage,
} from '@features/message';
import { getMessageMediaApi, getMessagesByConversationApi, messageApi } from '@features/message/message.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/message/message.api', () => ({
  messageApi: {
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  },
  getMessagesByConversationApi: jest.fn(),
  getMessageMediaApi: jest.fn(),
}));

jest.mock('@offline/request', () => ({
  queueRequestIfOffline: jest.fn(),
}));

describe('message.usecase', () => {
  beforeEach(() => {
    messageApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    messageApi.get.mockResolvedValue({ data: { id: '1' } });
    messageApi.create.mockResolvedValue({ data: { id: '1' } });
    messageApi.update.mockResolvedValue({ data: { id: '1' } });
    messageApi.remove.mockResolvedValue({ data: { id: '1' } });
    getMessagesByConversationApi.mockResolvedValue({ data: [{ id: '1' }] });
    getMessageMediaApi.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listMessages,
      get: getMessage,
      create: createMessage,
      update: updateMessage,
      remove: deleteMessage,
      extraActions: [
        { fn: listMessagesByConversation, args: ['1'] },
        { fn: getMessageMedia, args: ['1'] },
      ],
    },
    { queueRequestIfOffline }
  );
});
