/**
 * Template Variable Use Cases
 * File: template-variable.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { templateVariableApi } from './template-variable.api';
import { normalizeTemplateVariable, normalizeTemplateVariableList } from './template-variable.model';
import {
  parseTemplateVariableId,
  parseTemplateVariableListParams,
  parseTemplateVariablePayload,
} from './template-variable.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listTemplateVariables = async (params = {}) =>
  execute(async () => {
    const parsed = parseTemplateVariableListParams(params);
    const response = await templateVariableApi.list(parsed);
    return normalizeTemplateVariableList(response.data);
  });

const getTemplateVariable = async (id) =>
  execute(async () => {
    const parsedId = parseTemplateVariableId(id);
    const response = await templateVariableApi.get(parsedId);
    return normalizeTemplateVariable(response.data);
  });

const createTemplateVariable = async (payload) =>
  execute(async () => {
    const parsed = parseTemplateVariablePayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.TEMPLATE_VARIABLES.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeTemplateVariable(parsed);
    }
    const response = await templateVariableApi.create(parsed);
    return normalizeTemplateVariable(response.data);
  });

const updateTemplateVariable = async (id, payload) =>
  execute(async () => {
    const parsedId = parseTemplateVariableId(id);
    const parsed = parseTemplateVariablePayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.TEMPLATE_VARIABLES.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeTemplateVariable({ id: parsedId, ...parsed });
    }
    const response = await templateVariableApi.update(parsedId, parsed);
    return normalizeTemplateVariable(response.data);
  });

const deleteTemplateVariable = async (id) =>
  execute(async () => {
    const parsedId = parseTemplateVariableId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.TEMPLATE_VARIABLES.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeTemplateVariable({ id: parsedId });
    }
    const response = await templateVariableApi.remove(parsedId);
    return normalizeTemplateVariable(response.data);
  });

export {
  listTemplateVariables,
  getTemplateVariable,
  createTemplateVariable,
  updateTemplateVariable,
  deleteTemplateVariable,
};
