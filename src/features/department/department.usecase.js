/**
 * Department Use Cases
 * File: department.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { departmentApi, getDepartmentUnitsApi } from './department.api';
import { normalizeDepartment, normalizeDepartmentList } from './department.model';
import {
  parseDepartmentId,
  parseDepartmentListParams,
  parseDepartmentPayload,
} from './department.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const getPayload = (response) =>
  (response?.data?.data !== undefined ? response.data.data : response?.data);

const listDepartments = async (params = {}) =>
  execute(async () => {
    const parsed = parseDepartmentListParams(params);
    const response = await departmentApi.list(parsed);
    const payload = getPayload(response);
    return normalizeDepartmentList(Array.isArray(payload) ? payload : []);
  });

const getDepartment = async (id) =>
  execute(async () => {
    const parsedId = parseDepartmentId(id);
    const response = await departmentApi.get(parsedId);
    return normalizeDepartment(getPayload(response));
  });

const createDepartment = async (payload) =>
  execute(async () => {
    const parsed = parseDepartmentPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.DEPARTMENTS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeDepartment(parsed);
    }
    const response = await departmentApi.create(parsed);
    return normalizeDepartment(getPayload(response));
  });

const updateDepartment = async (id, payload) =>
  execute(async () => {
    const parsedId = parseDepartmentId(id);
    const parsed = parseDepartmentPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.DEPARTMENTS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeDepartment({ id: parsedId, ...parsed });
    }
    const response = await departmentApi.update(parsedId, parsed);
    return normalizeDepartment(getPayload(response));
  });

const deleteDepartment = async (id) =>
  execute(async () => {
    const parsedId = parseDepartmentId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.DEPARTMENTS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return { id: parsedId };
    }
    await departmentApi.remove(parsedId);
    return { id: parsedId };
  });

const listDepartmentUnits = async (id) =>
  execute(async () => {
    const parsedId = parseDepartmentId(id);
    const response = await getDepartmentUnitsApi(parsedId);
    return normalizeDepartmentList(response.data);
  });

export {
  listDepartments,
  getDepartment,
  createDepartment,
  updateDepartment,
  deleteDepartment,
  listDepartmentUnits,
};
