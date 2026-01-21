/**
 * Imaging Study Use Cases
 * File: imaging-study.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { imagingStudyApi } from './imaging-study.api';
import { normalizeImagingStudy, normalizeImagingStudyList } from './imaging-study.model';
import { parseImagingStudyId, parseImagingStudyListParams, parseImagingStudyPayload } from './imaging-study.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listImagingStudies = async (params = {}) =>
  execute(async () => {
    const parsed = parseImagingStudyListParams(params);
    const response = await imagingStudyApi.list(parsed);
    return normalizeImagingStudyList(response.data);
  });

const getImagingStudy = async (id) =>
  execute(async () => {
    const parsedId = parseImagingStudyId(id);
    const response = await imagingStudyApi.get(parsedId);
    return normalizeImagingStudy(response.data);
  });

const createImagingStudy = async (payload) =>
  execute(async () => {
    const parsed = parseImagingStudyPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.IMAGING_STUDIES.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeImagingStudy(parsed);
    }
    const response = await imagingStudyApi.create(parsed);
    return normalizeImagingStudy(response.data);
  });

const updateImagingStudy = async (id, payload) =>
  execute(async () => {
    const parsedId = parseImagingStudyId(id);
    const parsed = parseImagingStudyPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.IMAGING_STUDIES.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeImagingStudy({ id: parsedId, ...parsed });
    }
    const response = await imagingStudyApi.update(parsedId, parsed);
    return normalizeImagingStudy(response.data);
  });

const deleteImagingStudy = async (id) =>
  execute(async () => {
    const parsedId = parseImagingStudyId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.IMAGING_STUDIES.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeImagingStudy({ id: parsedId });
    }
    const response = await imagingStudyApi.remove(parsedId);
    return normalizeImagingStudy(response.data);
  });

export { listImagingStudies, getImagingStudy, createImagingStudy, updateImagingStudy, deleteImagingStudy };
