/**
 * Billing Adjustment Use Cases
 * File: billing-adjustment.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { billingAdjustmentApi } from './billing-adjustment.api';
import { normalizeBillingAdjustment, normalizeBillingAdjustmentList } from './billing-adjustment.model';
import {
  parseBillingAdjustmentId,
  parseBillingAdjustmentListParams,
  parseBillingAdjustmentPayload,
} from './billing-adjustment.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listBillingAdjustments = async (params = {}) =>
  execute(async () => {
    const parsed = parseBillingAdjustmentListParams(params);
    const response = await billingAdjustmentApi.list(parsed);
    return normalizeBillingAdjustmentList(response.data);
  });

const getBillingAdjustment = async (id) =>
  execute(async () => {
    const parsedId = parseBillingAdjustmentId(id);
    const response = await billingAdjustmentApi.get(parsedId);
    return normalizeBillingAdjustment(response.data);
  });

const createBillingAdjustment = async (payload) =>
  execute(async () => {
    const parsed = parseBillingAdjustmentPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.BILLING_ADJUSTMENTS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeBillingAdjustment(parsed);
    }
    const response = await billingAdjustmentApi.create(parsed);
    return normalizeBillingAdjustment(response.data);
  });

const updateBillingAdjustment = async (id, payload) =>
  execute(async () => {
    const parsedId = parseBillingAdjustmentId(id);
    const parsed = parseBillingAdjustmentPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.BILLING_ADJUSTMENTS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeBillingAdjustment({ id: parsedId, ...parsed });
    }
    const response = await billingAdjustmentApi.update(parsedId, parsed);
    return normalizeBillingAdjustment(response.data);
  });

const deleteBillingAdjustment = async (id) =>
  execute(async () => {
    const parsedId = parseBillingAdjustmentId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.BILLING_ADJUSTMENTS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeBillingAdjustment({ id: parsedId });
    }
    const response = await billingAdjustmentApi.remove(parsedId);
    return normalizeBillingAdjustment(response.data);
  });

export {
  listBillingAdjustments,
  getBillingAdjustment,
  createBillingAdjustment,
  updateBillingAdjustment,
  deleteBillingAdjustment,
};
