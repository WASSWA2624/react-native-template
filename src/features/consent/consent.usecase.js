/**
 * Consent Use Cases
 * File: consent.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { consentApi } from './consent.api';
import { normalizeConsent, normalizeConsentList } from './consent.model';
import { parseConsentId, parseConsentListParams, parseConsentPayload } from './consent.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listConsents = async (params = {}) =>
  execute(async () => {
    const parsed = parseConsentListParams(params);
    const response = await consentApi.list(parsed);
    return normalizeConsentList(response.data);
  });

const getConsent = async (id) =>
  execute(async () => {
    const parsedId = parseConsentId(id);
    const response = await consentApi.get(parsedId);
    return normalizeConsent(response.data);
  });

const createConsent = async (payload) =>
  execute(async () => {
    const parsed = parseConsentPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.CONSENTS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeConsent(parsed);
    }
    const response = await consentApi.create(parsed);
    return normalizeConsent(response.data);
  });

const updateConsent = async (id, payload) =>
  execute(async () => {
    const parsedId = parseConsentId(id);
    const parsed = parseConsentPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.CONSENTS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeConsent({ id: parsedId, ...parsed });
    }
    const response = await consentApi.update(parsedId, parsed);
    return normalizeConsent(response.data);
  });

const deleteConsent = async (id) =>
  execute(async () => {
    const parsedId = parseConsentId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.CONSENTS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeConsent({ id: parsedId });
    }
    const response = await consentApi.remove(parsedId);
    return normalizeConsent(response.data);
  });

export { listConsents, getConsent, createConsent, updateConsent, deleteConsent };
