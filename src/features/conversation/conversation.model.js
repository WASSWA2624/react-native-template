/**
 * Conversation Model
 * File: conversation.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeConversation = (value) => normalize(value);
const normalizeConversationList = (value) => normalizeList(value);

export { normalizeConversation, normalizeConversationList };
