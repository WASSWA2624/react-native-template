/**
 * License Use Cases
 * File: license.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { licenseApi } from './license.api';
import { normalizeLicense, normalizeLicenseList } from './license.model';
import { parseLicenseId, parseLicenseListParams, parseLicensePayload } from './license.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listLicenses = async (params = {}) =>
  execute(async () => {
    const parsed = parseLicenseListParams(params);
    const response = await licenseApi.list(parsed);
    return normalizeLicenseList(response.data);
  });

const getLicense = async (id) =>
  execute(async () => {
    const parsedId = parseLicenseId(id);
    const response = await licenseApi.get(parsedId);
    return normalizeLicense(response.data);
  });

const createLicense = async (payload) =>
  execute(async () => {
    const parsed = parseLicensePayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.LICENSES.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeLicense(parsed);
    }
    const response = await licenseApi.create(parsed);
    return normalizeLicense(response.data);
  });

const updateLicense = async (id, payload) =>
  execute(async () => {
    const parsedId = parseLicenseId(id);
    const parsed = parseLicensePayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.LICENSES.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeLicense({ id: parsedId, ...parsed });
    }
    const response = await licenseApi.update(parsedId, parsed);
    return normalizeLicense(response.data);
  });

const deleteLicense = async (id) =>
  execute(async () => {
    const parsedId = parseLicenseId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.LICENSES.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeLicense({ id: parsedId });
    }
    const response = await licenseApi.remove(parsedId);
    return normalizeLicense(response.data);
  });

export { listLicenses, getLicense, createLicense, updateLicense, deleteLicense };
