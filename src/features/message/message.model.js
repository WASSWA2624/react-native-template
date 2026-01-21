/**
 * Message Model
 * File: message.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeMessage = (value) => normalize(value);
const normalizeMessageList = (value) => normalizeList(value);

export { normalizeMessage, normalizeMessageList };
