/**
 * Refund Use Cases
 * File: refund.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { refundApi } from './refund.api';
import { normalizeRefund, normalizeRefundList } from './refund.model';
import { parseRefundId, parseRefundListParams, parseRefundPayload } from './refund.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listRefunds = async (params = {}) =>
  execute(async () => {
    const parsed = parseRefundListParams(params);
    const response = await refundApi.list(parsed);
    return normalizeRefundList(response.data);
  });

const getRefund = async (id) =>
  execute(async () => {
    const parsedId = parseRefundId(id);
    const response = await refundApi.get(parsedId);
    return normalizeRefund(response.data);
  });

const createRefund = async (payload) =>
  execute(async () => {
    const parsed = parseRefundPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.REFUNDS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeRefund(parsed);
    }
    const response = await refundApi.create(parsed);
    return normalizeRefund(response.data);
  });

const updateRefund = async (id, payload) =>
  execute(async () => {
    const parsedId = parseRefundId(id);
    const parsed = parseRefundPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.REFUNDS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeRefund({ id: parsedId, ...parsed });
    }
    const response = await refundApi.update(parsedId, parsed);
    return normalizeRefund(response.data);
  });

const deleteRefund = async (id) =>
  execute(async () => {
    const parsedId = parseRefundId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.REFUNDS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeRefund({ id: parsedId });
    }
    const response = await refundApi.remove(parsedId);
    return normalizeRefund(response.data);
  });

export { listRefunds, getRefund, createRefund, updateRefund, deleteRefund };
