/**
 * Theatre Case Use Cases
 * File: theatre-case.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { theatreCaseApi } from './theatre-case.api';
import { normalizeTheatreCase, normalizeTheatreCaseList } from './theatre-case.model';
import { parseTheatreCaseId, parseTheatreCaseListParams, parseTheatreCasePayload } from './theatre-case.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listTheatreCases = async (params = {}) =>
  execute(async () => {
    const parsed = parseTheatreCaseListParams(params);
    const response = await theatreCaseApi.list(parsed);
    return normalizeTheatreCaseList(response.data);
  });

const getTheatreCase = async (id) =>
  execute(async () => {
    const parsedId = parseTheatreCaseId(id);
    const response = await theatreCaseApi.get(parsedId);
    return normalizeTheatreCase(response.data);
  });

const createTheatreCase = async (payload) =>
  execute(async () => {
    const parsed = parseTheatreCasePayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.THEATRE_CASES.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeTheatreCase(parsed);
    }
    const response = await theatreCaseApi.create(parsed);
    return normalizeTheatreCase(response.data);
  });

const updateTheatreCase = async (id, payload) =>
  execute(async () => {
    const parsedId = parseTheatreCaseId(id);
    const parsed = parseTheatreCasePayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.THEATRE_CASES.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeTheatreCase({ id: parsedId, ...parsed });
    }
    const response = await theatreCaseApi.update(parsedId, parsed);
    return normalizeTheatreCase(response.data);
  });

const deleteTheatreCase = async (id) =>
  execute(async () => {
    const parsedId = parseTheatreCaseId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.THEATRE_CASES.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeTheatreCase({ id: parsedId });
    }
    const response = await theatreCaseApi.remove(parsedId);
    return normalizeTheatreCase(response.data);
  });

export { listTheatreCases, getTheatreCase, createTheatreCase, updateTheatreCase, deleteTheatreCase };
