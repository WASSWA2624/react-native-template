/**
 * useConversation Hook
 * File: useConversation.js
 */
import useCrud from '@hooks/useCrud';
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

const useConversation = () =>
  useCrud({
    list: listConversations,
    get: getConversation,
    create: createConversation,
    update: updateConversation,
    remove: deleteConversation,
    listParticipants: listConversationParticipants,
    addParticipant: addConversationParticipant,
    removeParticipant: removeConversationParticipant,
    listMessages: listConversationMessages,
    addMessage: addConversationMessage,
  });

export default useConversation;
