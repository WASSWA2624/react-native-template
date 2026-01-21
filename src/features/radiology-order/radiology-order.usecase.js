/**
 * Radiology Order Use Cases
 * File: radiology-order.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { radiologyOrderApi } from './radiology-order.api';
import { normalizeRadiologyOrder, normalizeRadiologyOrderList } from './radiology-order.model';
import { parseRadiologyOrderId, parseRadiologyOrderListParams, parseRadiologyOrderPayload } from './radiology-order.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listRadiologyOrders = async (params = {}) =>
  execute(async () => {
    const parsed = parseRadiologyOrderListParams(params);
    const response = await radiologyOrderApi.list(parsed);
    return normalizeRadiologyOrderList(response.data);
  });

const getRadiologyOrder = async (id) =>
  execute(async () => {
    const parsedId = parseRadiologyOrderId(id);
    const response = await radiologyOrderApi.get(parsedId);
    return normalizeRadiologyOrder(response.data);
  });

const createRadiologyOrder = async (payload) =>
  execute(async () => {
    const parsed = parseRadiologyOrderPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.RADIOLOGY_ORDERS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeRadiologyOrder(parsed);
    }
    const response = await radiologyOrderApi.create(parsed);
    return normalizeRadiologyOrder(response.data);
  });

const updateRadiologyOrder = async (id, payload) =>
  execute(async () => {
    const parsedId = parseRadiologyOrderId(id);
    const parsed = parseRadiologyOrderPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.RADIOLOGY_ORDERS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeRadiologyOrder({ id: parsedId, ...parsed });
    }
    const response = await radiologyOrderApi.update(parsedId, parsed);
    return normalizeRadiologyOrder(response.data);
  });

const deleteRadiologyOrder = async (id) =>
  execute(async () => {
    const parsedId = parseRadiologyOrderId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.RADIOLOGY_ORDERS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeRadiologyOrder({ id: parsedId });
    }
    const response = await radiologyOrderApi.remove(parsedId);
    return normalizeRadiologyOrder(response.data);
  });

export { listRadiologyOrders, getRadiologyOrder, createRadiologyOrder, updateRadiologyOrder, deleteRadiologyOrder };
