/**
 * Care Plan Use Cases
 * File: care-plan.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { carePlanApi } from './care-plan.api';
import { normalizeCarePlan, normalizeCarePlanList } from './care-plan.model';
import { parseCarePlanId, parseCarePlanListParams, parseCarePlanPayload } from './care-plan.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listCarePlans = async (params = {}) =>
  execute(async () => {
    const parsed = parseCarePlanListParams(params);
    const response = await carePlanApi.list(parsed);
    return normalizeCarePlanList(response.data);
  });

const getCarePlan = async (id) =>
  execute(async () => {
    const parsedId = parseCarePlanId(id);
    const response = await carePlanApi.get(parsedId);
    return normalizeCarePlan(response.data);
  });

const createCarePlan = async (payload) =>
  execute(async () => {
    const parsed = parseCarePlanPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.CARE_PLANS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeCarePlan(parsed);
    }
    const response = await carePlanApi.create(parsed);
    return normalizeCarePlan(response.data);
  });

const updateCarePlan = async (id, payload) =>
  execute(async () => {
    const parsedId = parseCarePlanId(id);
    const parsed = parseCarePlanPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.CARE_PLANS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeCarePlan({ id: parsedId, ...parsed });
    }
    const response = await carePlanApi.update(parsedId, parsed);
    return normalizeCarePlan(response.data);
  });

const deleteCarePlan = async (id) =>
  execute(async () => {
    const parsedId = parseCarePlanId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.CARE_PLANS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeCarePlan({ id: parsedId });
    }
    const response = await carePlanApi.remove(parsedId);
    return normalizeCarePlan(response.data);
  });

export { listCarePlans, getCarePlan, createCarePlan, updateCarePlan, deleteCarePlan };
