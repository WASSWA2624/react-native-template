/**
 * Medication Administration Use Cases
 * File: medication-administration.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { medicationAdministrationApi } from './medication-administration.api';
import {
  normalizeMedicationAdministration,
  normalizeMedicationAdministrationList,
} from './medication-administration.model';
import {
  parseMedicationAdministrationId,
  parseMedicationAdministrationListParams,
  parseMedicationAdministrationPayload,
} from './medication-administration.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listMedicationAdministrations = async (params = {}) =>
  execute(async () => {
    const parsed = parseMedicationAdministrationListParams(params);
    const response = await medicationAdministrationApi.list(parsed);
    return normalizeMedicationAdministrationList(response.data);
  });

const getMedicationAdministration = async (id) =>
  execute(async () => {
    const parsedId = parseMedicationAdministrationId(id);
    const response = await medicationAdministrationApi.get(parsedId);
    return normalizeMedicationAdministration(response.data);
  });

const createMedicationAdministration = async (payload) =>
  execute(async () => {
    const parsed = parseMedicationAdministrationPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.MEDICATION_ADMINISTRATIONS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeMedicationAdministration(parsed);
    }
    const response = await medicationAdministrationApi.create(parsed);
    return normalizeMedicationAdministration(response.data);
  });

const updateMedicationAdministration = async (id, payload) =>
  execute(async () => {
    const parsedId = parseMedicationAdministrationId(id);
    const parsed = parseMedicationAdministrationPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.MEDICATION_ADMINISTRATIONS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeMedicationAdministration({ id: parsedId, ...parsed });
    }
    const response = await medicationAdministrationApi.update(parsedId, parsed);
    return normalizeMedicationAdministration(response.data);
  });

const deleteMedicationAdministration = async (id) =>
  execute(async () => {
    const parsedId = parseMedicationAdministrationId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.MEDICATION_ADMINISTRATIONS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeMedicationAdministration({ id: parsedId });
    }
    const response = await medicationAdministrationApi.remove(parsedId);
    return normalizeMedicationAdministration(response.data);
  });

export {
  listMedicationAdministrations,
  getMedicationAdministration,
  createMedicationAdministration,
  updateMedicationAdministration,
  deleteMedicationAdministration,
};
