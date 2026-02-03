/**
 * User Use Cases
 * File: user.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { userApi } from './user.api';
import { normalizeUser, normalizeUserList } from './user.model';
import { parseUserId, parseUserListParams, parseUserPayload } from './user.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

/** Backend response-format.mdc: success body is { status, message, data, meta }. Unwrap payload. */
const getPayload = (response) =>
  (response?.data?.data !== undefined ? response.data.data : response?.data);

const listUsers = async (params = {}) =>
  execute(async () => {
    const parsed = parseUserListParams(params);
    const response = await userApi.list(parsed);
    const payload = getPayload(response);
    return normalizeUserList(Array.isArray(payload) ? payload : []);
  });

const getUser = async (id) =>
  execute(async () => {
    const parsedId = parseUserId(id);
    const response = await userApi.get(parsedId);
    return normalizeUser(getPayload(response));
  });

const createUser = async (payload) =>
  execute(async () => {
    const parsed = parseUserPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.USERS.LIST,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeUser(parsed);
    }
    const response = await userApi.create(parsed);
    return normalizeUser(getPayload(response));
  });

const updateUser = async (id, payload) =>
  execute(async () => {
    const parsedId = parseUserId(id);
    const parsed = parseUserPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.USERS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeUser({ id: parsedId, ...parsed });
    }
    const response = await userApi.update(parsedId, parsed);
    return normalizeUser(getPayload(response));
  });

const deleteUser = async (id) =>
  execute(async () => {
    const parsedId = parseUserId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.USERS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return { id: parsedId };
    }
    await userApi.remove(parsedId);
    return { id: parsedId };
  });

export { listUsers, getUser, createUser, updateUser, deleteUser };
