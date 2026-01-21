/**
 * Encounter Use Cases
 * File: encounter.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { encounterApi } from './encounter.api';
import { normalizeEncounter, normalizeEncounterList } from './encounter.model';
import { parseEncounterId, parseEncounterListParams, parseEncounterPayload } from './encounter.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listEncounters = async (params = {}) =>
  execute(async () => {
    const parsed = parseEncounterListParams(params);
    const response = await encounterApi.list(parsed);
    return normalizeEncounterList(response.data);
  });

const getEncounter = async (id) =>
  execute(async () => {
    const parsedId = parseEncounterId(id);
    const response = await encounterApi.get(parsedId);
    return normalizeEncounter(response.data);
  });

const createEncounter = async (payload) =>
  execute(async () => {
    const parsed = parseEncounterPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.ENCOUNTERS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeEncounter(parsed);
    }
    const response = await encounterApi.create(parsed);
    return normalizeEncounter(response.data);
  });

const updateEncounter = async (id, payload) =>
  execute(async () => {
    const parsedId = parseEncounterId(id);
    const parsed = parseEncounterPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.ENCOUNTERS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeEncounter({ id: parsedId, ...parsed });
    }
    const response = await encounterApi.update(parsedId, parsed);
    return normalizeEncounter(response.data);
  });

const deleteEncounter = async (id) =>
  execute(async () => {
    const parsedId = parseEncounterId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.ENCOUNTERS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeEncounter({ id: parsedId });
    }
    const response = await encounterApi.remove(parsedId);
    return normalizeEncounter(response.data);
  });

export { listEncounters, getEncounter, createEncounter, updateEncounter, deleteEncounter };
