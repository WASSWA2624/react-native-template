/**
 * Nursing Note Use Cases
 * File: nursing-note.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { nursingNoteApi } from './nursing-note.api';
import { normalizeNursingNote, normalizeNursingNoteList } from './nursing-note.model';
import { parseNursingNoteId, parseNursingNoteListParams, parseNursingNotePayload } from './nursing-note.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listNursingNotes = async (params = {}) =>
  execute(async () => {
    const parsed = parseNursingNoteListParams(params);
    const response = await nursingNoteApi.list(parsed);
    return normalizeNursingNoteList(response.data);
  });

const getNursingNote = async (id) =>
  execute(async () => {
    const parsedId = parseNursingNoteId(id);
    const response = await nursingNoteApi.get(parsedId);
    return normalizeNursingNote(response.data);
  });

const createNursingNote = async (payload) =>
  execute(async () => {
    const parsed = parseNursingNotePayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.NURSING_NOTES.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeNursingNote(parsed);
    }
    const response = await nursingNoteApi.create(parsed);
    return normalizeNursingNote(response.data);
  });

const updateNursingNote = async (id, payload) =>
  execute(async () => {
    const parsedId = parseNursingNoteId(id);
    const parsed = parseNursingNotePayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.NURSING_NOTES.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeNursingNote({ id: parsedId, ...parsed });
    }
    const response = await nursingNoteApi.update(parsedId, parsed);
    return normalizeNursingNote(response.data);
  });

const deleteNursingNote = async (id) =>
  execute(async () => {
    const parsedId = parseNursingNoteId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.NURSING_NOTES.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeNursingNote({ id: parsedId });
    }
    const response = await nursingNoteApi.remove(parsedId);
    return normalizeNursingNote(response.data);
  });

export { listNursingNotes, getNursingNote, createNursingNote, updateNursingNote, deleteNursingNote };
