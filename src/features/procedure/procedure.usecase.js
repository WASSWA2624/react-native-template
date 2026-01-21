/**
 * Procedure Use Cases
 * File: procedure.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { procedureApi } from './procedure.api';
import { normalizeProcedure, normalizeProcedureList } from './procedure.model';
import { parseProcedureId, parseProcedureListParams, parseProcedurePayload } from './procedure.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listProcedures = async (params = {}) =>
  execute(async () => {
    const parsed = parseProcedureListParams(params);
    const response = await procedureApi.list(parsed);
    return normalizeProcedureList(response.data);
  });

const getProcedure = async (id) =>
  execute(async () => {
    const parsedId = parseProcedureId(id);
    const response = await procedureApi.get(parsedId);
    return normalizeProcedure(response.data);
  });

const createProcedure = async (payload) =>
  execute(async () => {
    const parsed = parseProcedurePayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.PROCEDURES.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeProcedure(parsed);
    }
    const response = await procedureApi.create(parsed);
    return normalizeProcedure(response.data);
  });

const updateProcedure = async (id, payload) =>
  execute(async () => {
    const parsedId = parseProcedureId(id);
    const parsed = parseProcedurePayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.PROCEDURES.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeProcedure({ id: parsedId, ...parsed });
    }
    const response = await procedureApi.update(parsedId, parsed);
    return normalizeProcedure(response.data);
  });

const deleteProcedure = async (id) =>
  execute(async () => {
    const parsedId = parseProcedureId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.PROCEDURES.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeProcedure({ id: parsedId });
    }
    const response = await procedureApi.remove(parsedId);
    return normalizeProcedure(response.data);
  });

export { listProcedures, getProcedure, createProcedure, updateProcedure, deleteProcedure };
