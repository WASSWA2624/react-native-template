/**
 * Clinical Note Use Cases
 * File: clinical-note.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { clinicalNoteApi } from './clinical-note.api';
import { normalizeClinicalNote, normalizeClinicalNoteList } from './clinical-note.model';
import { parseClinicalNoteId, parseClinicalNoteListParams, parseClinicalNotePayload } from './clinical-note.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listClinicalNotes = async (params = {}) =>
  execute(async () => {
    const parsed = parseClinicalNoteListParams(params);
    const response = await clinicalNoteApi.list(parsed);
    return normalizeClinicalNoteList(response.data);
  });

const getClinicalNote = async (id) =>
  execute(async () => {
    const parsedId = parseClinicalNoteId(id);
    const response = await clinicalNoteApi.get(parsedId);
    return normalizeClinicalNote(response.data);
  });

const createClinicalNote = async (payload) =>
  execute(async () => {
    const parsed = parseClinicalNotePayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.CLINICAL_NOTES.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeClinicalNote(parsed);
    }
    const response = await clinicalNoteApi.create(parsed);
    return normalizeClinicalNote(response.data);
  });

const updateClinicalNote = async (id, payload) =>
  execute(async () => {
    const parsedId = parseClinicalNoteId(id);
    const parsed = parseClinicalNotePayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.CLINICAL_NOTES.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeClinicalNote({ id: parsedId, ...parsed });
    }
    const response = await clinicalNoteApi.update(parsedId, parsed);
    return normalizeClinicalNote(response.data);
  });

const deleteClinicalNote = async (id) =>
  execute(async () => {
    const parsedId = parseClinicalNoteId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.CLINICAL_NOTES.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeClinicalNote({ id: parsedId });
    }
    const response = await clinicalNoteApi.remove(parsedId);
    return normalizeClinicalNote(response.data);
  });

export { listClinicalNotes, getClinicalNote, createClinicalNote, updateClinicalNote, deleteClinicalNote };
