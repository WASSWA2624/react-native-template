/**
 * Transfer Request Use Cases
 * File: transfer-request.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { transferRequestApi } from './transfer-request.api';
import { normalizeTransferRequest, normalizeTransferRequestList } from './transfer-request.model';
import {
  parseTransferRequestId,
  parseTransferRequestListParams,
  parseTransferRequestPayload,
} from './transfer-request.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listTransferRequests = async (params = {}) =>
  execute(async () => {
    const parsed = parseTransferRequestListParams(params);
    const response = await transferRequestApi.list(parsed);
    return normalizeTransferRequestList(response.data);
  });

const getTransferRequest = async (id) =>
  execute(async () => {
    const parsedId = parseTransferRequestId(id);
    const response = await transferRequestApi.get(parsedId);
    return normalizeTransferRequest(response.data);
  });

const createTransferRequest = async (payload) =>
  execute(async () => {
    const parsed = parseTransferRequestPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.TRANSFER_REQUESTS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeTransferRequest(parsed);
    }
    const response = await transferRequestApi.create(parsed);
    return normalizeTransferRequest(response.data);
  });

const updateTransferRequest = async (id, payload) =>
  execute(async () => {
    const parsedId = parseTransferRequestId(id);
    const parsed = parseTransferRequestPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.TRANSFER_REQUESTS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeTransferRequest({ id: parsedId, ...parsed });
    }
    const response = await transferRequestApi.update(parsedId, parsed);
    return normalizeTransferRequest(response.data);
  });

const deleteTransferRequest = async (id) =>
  execute(async () => {
    const parsedId = parseTransferRequestId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.TRANSFER_REQUESTS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeTransferRequest({ id: parsedId });
    }
    const response = await transferRequestApi.remove(parsedId);
    return normalizeTransferRequest(response.data);
  });

export {
  listTransferRequests,
  getTransferRequest,
  createTransferRequest,
  updateTransferRequest,
  deleteTransferRequest,
};
