/**
 * Template Use Cases
 * File: template.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { templateApi } from './template.api';
import { normalizeTemplate, normalizeTemplateList } from './template.model';
import { parseTemplateId, parseTemplateListParams, parseTemplatePayload } from './template.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listTemplates = async (params = {}) =>
  execute(async () => {
    const parsed = parseTemplateListParams(params);
    const response = await templateApi.list(parsed);
    return normalizeTemplateList(response.data);
  });

const getTemplate = async (id) =>
  execute(async () => {
    const parsedId = parseTemplateId(id);
    const response = await templateApi.get(parsedId);
    return normalizeTemplate(response.data);
  });

const createTemplate = async (payload) =>
  execute(async () => {
    const parsed = parseTemplatePayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.TEMPLATES.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeTemplate(parsed);
    }
    const response = await templateApi.create(parsed);
    return normalizeTemplate(response.data);
  });

const updateTemplate = async (id, payload) =>
  execute(async () => {
    const parsedId = parseTemplateId(id);
    const parsed = parseTemplatePayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.TEMPLATES.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeTemplate({ id: parsedId, ...parsed });
    }
    const response = await templateApi.update(parsedId, parsed);
    return normalizeTemplate(response.data);
  });

const deleteTemplate = async (id) =>
  execute(async () => {
    const parsedId = parseTemplateId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.TEMPLATES.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeTemplate({ id: parsedId });
    }
    const response = await templateApi.remove(parsedId);
    return normalizeTemplate(response.data);
  });

export { listTemplates, getTemplate, createTemplate, updateTemplate, deleteTemplate };
