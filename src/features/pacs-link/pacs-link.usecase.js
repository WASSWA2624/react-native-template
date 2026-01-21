/**
 * PACS Link Use Cases
 * File: pacs-link.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { pacsLinkApi } from './pacs-link.api';
import { normalizePacsLink, normalizePacsLinkList } from './pacs-link.model';
import { parsePacsLinkId, parsePacsLinkListParams, parsePacsLinkPayload } from './pacs-link.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listPacsLinks = async (params = {}) =>
  execute(async () => {
    const parsed = parsePacsLinkListParams(params);
    const response = await pacsLinkApi.list(parsed);
    return normalizePacsLinkList(response.data);
  });

const getPacsLink = async (id) =>
  execute(async () => {
    const parsedId = parsePacsLinkId(id);
    const response = await pacsLinkApi.get(parsedId);
    return normalizePacsLink(response.data);
  });

const createPacsLink = async (payload) =>
  execute(async () => {
    const parsed = parsePacsLinkPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.PACS_LINKS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizePacsLink(parsed);
    }
    const response = await pacsLinkApi.create(parsed);
    return normalizePacsLink(response.data);
  });

const updatePacsLink = async (id, payload) =>
  execute(async () => {
    const parsedId = parsePacsLinkId(id);
    const parsed = parsePacsLinkPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.PACS_LINKS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizePacsLink({ id: parsedId, ...parsed });
    }
    const response = await pacsLinkApi.update(parsedId, parsed);
    return normalizePacsLink(response.data);
  });

const deletePacsLink = async (id) =>
  execute(async () => {
    const parsedId = parsePacsLinkId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.PACS_LINKS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizePacsLink({ id: parsedId });
    }
    const response = await pacsLinkApi.remove(parsedId);
    return normalizePacsLink(response.data);
  });

export { listPacsLinks, getPacsLink, createPacsLink, updatePacsLink, deletePacsLink };
