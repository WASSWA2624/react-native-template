/**
 * Pre-Authorization Model
 * File: pre-authorization.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizePreAuthorization = (value) => normalize(value);
const normalizePreAuthorizationList = (value) => normalizeList(value);

export { normalizePreAuthorization, normalizePreAuthorizationList };
