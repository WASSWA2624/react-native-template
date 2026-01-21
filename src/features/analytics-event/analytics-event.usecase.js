/**
 * Analytics Event Use Cases
 * File: analytics-event.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { analyticsEventApi } from './analytics-event.api';
import { normalizeAnalyticsEvent, normalizeAnalyticsEventList } from './analytics-event.model';
import {
  parseAnalyticsEventId,
  parseAnalyticsEventListParams,
  parseAnalyticsEventPayload,
} from './analytics-event.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listAnalyticsEvents = async (params = {}) =>
  execute(async () => {
    const parsed = parseAnalyticsEventListParams(params);
    const response = await analyticsEventApi.list(parsed);
    return normalizeAnalyticsEventList(response.data);
  });

const getAnalyticsEvent = async (id) =>
  execute(async () => {
    const parsedId = parseAnalyticsEventId(id);
    const response = await analyticsEventApi.get(parsedId);
    return normalizeAnalyticsEvent(response.data);
  });

const createAnalyticsEvent = async (payload) =>
  execute(async () => {
    const parsed = parseAnalyticsEventPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.ANALYTICS_EVENTS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeAnalyticsEvent(parsed);
    }
    const response = await analyticsEventApi.create(parsed);
    return normalizeAnalyticsEvent(response.data);
  });

const updateAnalyticsEvent = async (id, payload) =>
  execute(async () => {
    const parsedId = parseAnalyticsEventId(id);
    const parsed = parseAnalyticsEventPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.ANALYTICS_EVENTS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeAnalyticsEvent({ id: parsedId, ...parsed });
    }
    const response = await analyticsEventApi.update(parsedId, parsed);
    return normalizeAnalyticsEvent(response.data);
  });

const deleteAnalyticsEvent = async (id) =>
  execute(async () => {
    const parsedId = parseAnalyticsEventId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.ANALYTICS_EVENTS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeAnalyticsEvent({ id: parsedId });
    }
    const response = await analyticsEventApi.remove(parsedId);
    return normalizeAnalyticsEvent(response.data);
  });

export {
  listAnalyticsEvents,
  getAnalyticsEvent,
  createAnalyticsEvent,
  updateAnalyticsEvent,
  deleteAnalyticsEvent,
};
