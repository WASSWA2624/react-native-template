/**
 * Anesthesia Record Use Cases
 * File: anesthesia-record.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { anesthesiaRecordApi } from './anesthesia-record.api';
import { normalizeAnesthesiaRecord, normalizeAnesthesiaRecordList } from './anesthesia-record.model';
import {
  parseAnesthesiaRecordId,
  parseAnesthesiaRecordListParams,
  parseAnesthesiaRecordPayload,
} from './anesthesia-record.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listAnesthesiaRecords = async (params = {}) =>
  execute(async () => {
    const parsed = parseAnesthesiaRecordListParams(params);
    const response = await anesthesiaRecordApi.list(parsed);
    return normalizeAnesthesiaRecordList(response.data);
  });

const getAnesthesiaRecord = async (id) =>
  execute(async () => {
    const parsedId = parseAnesthesiaRecordId(id);
    const response = await anesthesiaRecordApi.get(parsedId);
    return normalizeAnesthesiaRecord(response.data);
  });

const createAnesthesiaRecord = async (payload) =>
  execute(async () => {
    const parsed = parseAnesthesiaRecordPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.ANESTHESIA_RECORDS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeAnesthesiaRecord(parsed);
    }
    const response = await anesthesiaRecordApi.create(parsed);
    return normalizeAnesthesiaRecord(response.data);
  });

const updateAnesthesiaRecord = async (id, payload) =>
  execute(async () => {
    const parsedId = parseAnesthesiaRecordId(id);
    const parsed = parseAnesthesiaRecordPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.ANESTHESIA_RECORDS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeAnesthesiaRecord({ id: parsedId, ...parsed });
    }
    const response = await anesthesiaRecordApi.update(parsedId, parsed);
    return normalizeAnesthesiaRecord(response.data);
  });

const deleteAnesthesiaRecord = async (id) =>
  execute(async () => {
    const parsedId = parseAnesthesiaRecordId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.ANESTHESIA_RECORDS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeAnesthesiaRecord({ id: parsedId });
    }
    const response = await anesthesiaRecordApi.remove(parsedId);
    return normalizeAnesthesiaRecord(response.data);
  });

export {
  listAnesthesiaRecords,
  getAnesthesiaRecord,
  createAnesthesiaRecord,
  updateAnesthesiaRecord,
  deleteAnesthesiaRecord,
};
