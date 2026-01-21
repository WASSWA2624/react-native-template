/**
 * useMessage Hook
 * File: useMessage.js
 */
import useCrud from '@hooks/useCrud';
import {
  createMessage,
  deleteMessage,
  getMessage,
  getMessageMedia,
  listMessages,
  listMessagesByConversation,
  updateMessage,
} from '@features/message';

const useMessage = () =>
  useCrud({
    list: listMessages,
    get: getMessage,
    create: createMessage,
    update: updateMessage,
    remove: deleteMessage,
    listByConversation: listMessagesByConversation,
    getMedia: getMessageMedia,
  });

export default useMessage;
