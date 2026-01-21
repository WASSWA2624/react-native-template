/**
 * Subscription Use Cases
 * File: subscription.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { subscriptionApi } from './subscription.api';
import { normalizeSubscription, normalizeSubscriptionList } from './subscription.model';
import {
  parseSubscriptionId,
  parseSubscriptionListParams,
  parseSubscriptionPayload,
} from './subscription.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listSubscriptions = async (params = {}) =>
  execute(async () => {
    const parsed = parseSubscriptionListParams(params);
    const response = await subscriptionApi.list(parsed);
    return normalizeSubscriptionList(response.data);
  });

const getSubscription = async (id) =>
  execute(async () => {
    const parsedId = parseSubscriptionId(id);
    const response = await subscriptionApi.get(parsedId);
    return normalizeSubscription(response.data);
  });

const createSubscription = async (payload) =>
  execute(async () => {
    const parsed = parseSubscriptionPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.SUBSCRIPTIONS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeSubscription(parsed);
    }
    const response = await subscriptionApi.create(parsed);
    return normalizeSubscription(response.data);
  });

const updateSubscription = async (id, payload) =>
  execute(async () => {
    const parsedId = parseSubscriptionId(id);
    const parsed = parseSubscriptionPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.SUBSCRIPTIONS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeSubscription({ id: parsedId, ...parsed });
    }
    const response = await subscriptionApi.update(parsedId, parsed);
    return normalizeSubscription(response.data);
  });

const deleteSubscription = async (id) =>
  execute(async () => {
    const parsedId = parseSubscriptionId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.SUBSCRIPTIONS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeSubscription({ id: parsedId });
    }
    const response = await subscriptionApi.remove(parsedId);
    return normalizeSubscription(response.data);
  });

export { listSubscriptions, getSubscription, createSubscription, updateSubscription, deleteSubscription };
