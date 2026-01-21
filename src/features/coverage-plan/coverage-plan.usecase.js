/**
 * Coverage Plan Use Cases
 * File: coverage-plan.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { coveragePlanApi } from './coverage-plan.api';
import { normalizeCoveragePlan, normalizeCoveragePlanList } from './coverage-plan.model';
import {
  parseCoveragePlanId,
  parseCoveragePlanListParams,
  parseCoveragePlanPayload,
} from './coverage-plan.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listCoveragePlans = async (params = {}) =>
  execute(async () => {
    const parsed = parseCoveragePlanListParams(params);
    const response = await coveragePlanApi.list(parsed);
    return normalizeCoveragePlanList(response.data);
  });

const getCoveragePlan = async (id) =>
  execute(async () => {
    const parsedId = parseCoveragePlanId(id);
    const response = await coveragePlanApi.get(parsedId);
    return normalizeCoveragePlan(response.data);
  });

const createCoveragePlan = async (payload) =>
  execute(async () => {
    const parsed = parseCoveragePlanPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.COVERAGE_PLANS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeCoveragePlan(parsed);
    }
    const response = await coveragePlanApi.create(parsed);
    return normalizeCoveragePlan(response.data);
  });

const updateCoveragePlan = async (id, payload) =>
  execute(async () => {
    const parsedId = parseCoveragePlanId(id);
    const parsed = parseCoveragePlanPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.COVERAGE_PLANS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeCoveragePlan({ id: parsedId, ...parsed });
    }
    const response = await coveragePlanApi.update(parsedId, parsed);
    return normalizeCoveragePlan(response.data);
  });

const deleteCoveragePlan = async (id) =>
  execute(async () => {
    const parsedId = parseCoveragePlanId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.COVERAGE_PLANS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeCoveragePlan({ id: parsedId });
    }
    const response = await coveragePlanApi.remove(parsedId);
    return normalizeCoveragePlan(response.data);
  });

export {
  listCoveragePlans,
  getCoveragePlan,
  createCoveragePlan,
  updateCoveragePlan,
  deleteCoveragePlan,
};
