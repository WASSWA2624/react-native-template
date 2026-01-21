/**
 * Diagnosis Use Cases
 * File: diagnosis.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { diagnosisApi } from './diagnosis.api';
import { normalizeDiagnosis, normalizeDiagnosisList } from './diagnosis.model';
import { parseDiagnosisId, parseDiagnosisListParams, parseDiagnosisPayload } from './diagnosis.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listDiagnoses = async (params = {}) =>
  execute(async () => {
    const parsed = parseDiagnosisListParams(params);
    const response = await diagnosisApi.list(parsed);
    return normalizeDiagnosisList(response.data);
  });

const getDiagnosis = async (id) =>
  execute(async () => {
    const parsedId = parseDiagnosisId(id);
    const response = await diagnosisApi.get(parsedId);
    return normalizeDiagnosis(response.data);
  });

const createDiagnosis = async (payload) =>
  execute(async () => {
    const parsed = parseDiagnosisPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.DIAGNOSES.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeDiagnosis(parsed);
    }
    const response = await diagnosisApi.create(parsed);
    return normalizeDiagnosis(response.data);
  });

const updateDiagnosis = async (id, payload) =>
  execute(async () => {
    const parsedId = parseDiagnosisId(id);
    const parsed = parseDiagnosisPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.DIAGNOSES.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeDiagnosis({ id: parsedId, ...parsed });
    }
    const response = await diagnosisApi.update(parsedId, parsed);
    return normalizeDiagnosis(response.data);
  });

const deleteDiagnosis = async (id) =>
  execute(async () => {
    const parsedId = parseDiagnosisId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.DIAGNOSES.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeDiagnosis({ id: parsedId });
    }
    const response = await diagnosisApi.remove(parsedId);
    return normalizeDiagnosis(response.data);
  });

export { listDiagnoses, getDiagnosis, createDiagnosis, updateDiagnosis, deleteDiagnosis };
