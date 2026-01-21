/**
 * Pre-Authorization Use Cases
 * File: pre-authorization.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { preAuthorizationApi } from './pre-authorization.api';
import { normalizePreAuthorization, normalizePreAuthorizationList } from './pre-authorization.model';
import {
  parsePreAuthorizationId,
  parsePreAuthorizationListParams,
  parsePreAuthorizationPayload,
} from './pre-authorization.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listPreAuthorizations = async (params = {}) =>
  execute(async () => {
    const parsed = parsePreAuthorizationListParams(params);
    const response = await preAuthorizationApi.list(parsed);
    return normalizePreAuthorizationList(response.data);
  });

const getPreAuthorization = async (id) =>
  execute(async () => {
    const parsedId = parsePreAuthorizationId(id);
    const response = await preAuthorizationApi.get(parsedId);
    return normalizePreAuthorization(response.data);
  });

const createPreAuthorization = async (payload) =>
  execute(async () => {
    const parsed = parsePreAuthorizationPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.PRE_AUTHORIZATIONS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizePreAuthorization(parsed);
    }
    const response = await preAuthorizationApi.create(parsed);
    return normalizePreAuthorization(response.data);
  });

const updatePreAuthorization = async (id, payload) =>
  execute(async () => {
    const parsedId = parsePreAuthorizationId(id);
    const parsed = parsePreAuthorizationPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.PRE_AUTHORIZATIONS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizePreAuthorization({ id: parsedId, ...parsed });
    }
    const response = await preAuthorizationApi.update(parsedId, parsed);
    return normalizePreAuthorization(response.data);
  });

const deletePreAuthorization = async (id) =>
  execute(async () => {
    const parsedId = parsePreAuthorizationId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.PRE_AUTHORIZATIONS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizePreAuthorization({ id: parsedId });
    }
    const response = await preAuthorizationApi.remove(parsedId);
    return normalizePreAuthorization(response.data);
  });

export {
  listPreAuthorizations,
  getPreAuthorization,
  createPreAuthorization,
  updatePreAuthorization,
  deletePreAuthorization,
};
