/**
 * Post-Op Note Use Cases
 * File: post-op-note.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { postOpNoteApi } from './post-op-note.api';
import { normalizePostOpNote, normalizePostOpNoteList } from './post-op-note.model';
import { parsePostOpNoteId, parsePostOpNoteListParams, parsePostOpNotePayload } from './post-op-note.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listPostOpNotes = async (params = {}) =>
  execute(async () => {
    const parsed = parsePostOpNoteListParams(params);
    const response = await postOpNoteApi.list(parsed);
    return normalizePostOpNoteList(response.data);
  });

const getPostOpNote = async (id) =>
  execute(async () => {
    const parsedId = parsePostOpNoteId(id);
    const response = await postOpNoteApi.get(parsedId);
    return normalizePostOpNote(response.data);
  });

const createPostOpNote = async (payload) =>
  execute(async () => {
    const parsed = parsePostOpNotePayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.POST_OP_NOTES.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizePostOpNote(parsed);
    }
    const response = await postOpNoteApi.create(parsed);
    return normalizePostOpNote(response.data);
  });

const updatePostOpNote = async (id, payload) =>
  execute(async () => {
    const parsedId = parsePostOpNoteId(id);
    const parsed = parsePostOpNotePayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.POST_OP_NOTES.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizePostOpNote({ id: parsedId, ...parsed });
    }
    const response = await postOpNoteApi.update(parsedId, parsed);
    return normalizePostOpNote(response.data);
  });

const deletePostOpNote = async (id) =>
  execute(async () => {
    const parsedId = parsePostOpNoteId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.POST_OP_NOTES.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizePostOpNote({ id: parsedId });
    }
    const response = await postOpNoteApi.remove(parsedId);
    return normalizePostOpNote(response.data);
  });

export { listPostOpNotes, getPostOpNote, createPostOpNote, updatePostOpNote, deletePostOpNote };
