/**
 * Radiology Test Use Cases
 * File: radiology-test.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { radiologyTestApi } from './radiology-test.api';
import { normalizeRadiologyTest, normalizeRadiologyTestList } from './radiology-test.model';
import { parseRadiologyTestId, parseRadiologyTestListParams, parseRadiologyTestPayload } from './radiology-test.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listRadiologyTests = async (params = {}) =>
  execute(async () => {
    const parsed = parseRadiologyTestListParams(params);
    const response = await radiologyTestApi.list(parsed);
    return normalizeRadiologyTestList(response.data);
  });

const getRadiologyTest = async (id) =>
  execute(async () => {
    const parsedId = parseRadiologyTestId(id);
    const response = await radiologyTestApi.get(parsedId);
    return normalizeRadiologyTest(response.data);
  });

const createRadiologyTest = async (payload) =>
  execute(async () => {
    const parsed = parseRadiologyTestPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.RADIOLOGY_TESTS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeRadiologyTest(parsed);
    }
    const response = await radiologyTestApi.create(parsed);
    return normalizeRadiologyTest(response.data);
  });

const updateRadiologyTest = async (id, payload) =>
  execute(async () => {
    const parsedId = parseRadiologyTestId(id);
    const parsed = parseRadiologyTestPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.RADIOLOGY_TESTS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeRadiologyTest({ id: parsedId, ...parsed });
    }
    const response = await radiologyTestApi.update(parsedId, parsed);
    return normalizeRadiologyTest(response.data);
  });

const deleteRadiologyTest = async (id) =>
  execute(async () => {
    const parsedId = parseRadiologyTestId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.RADIOLOGY_TESTS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeRadiologyTest({ id: parsedId });
    }
    const response = await radiologyTestApi.remove(parsedId);
    return normalizeRadiologyTest(response.data);
  });

export { listRadiologyTests, getRadiologyTest, createRadiologyTest, updateRadiologyTest, deleteRadiologyTest };
