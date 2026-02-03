/**
 * Address Use Cases
 * File: address.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { addressApi } from './address.api';
import { normalizeAddress, normalizeAddressList } from './address.model';
import { parseAddressId, parseAddressListParams, parseAddressPayload } from './address.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const getPayload = (response) =>
  (response?.data?.data !== undefined ? response.data.data : response?.data);

const listAddresses = async (params = {}) =>
  execute(async () => {
    const parsed = parseAddressListParams(params);
    const response = await addressApi.list(parsed);
    const payload = getPayload(response);
    return normalizeAddressList(Array.isArray(payload) ? payload : []);
  });

const getAddress = async (id) =>
  execute(async () => {
    const parsedId = parseAddressId(id);
    const response = await addressApi.get(parsedId);
    return normalizeAddress(getPayload(response));
  });

const createAddress = async (payload) =>
  execute(async () => {
    const parsed = parseAddressPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.ADDRESSES.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeAddress(parsed);
    }
    const response = await addressApi.create(parsed);
    return normalizeAddress(getPayload(response));
  });

const updateAddress = async (id, payload) =>
  execute(async () => {
    const parsedId = parseAddressId(id);
    const parsed = parseAddressPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.ADDRESSES.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeAddress({ id: parsedId, ...parsed });
    }
    const response = await addressApi.update(parsedId, parsed);
    return normalizeAddress(getPayload(response));
  });

const deleteAddress = async (id) =>
  execute(async () => {
    const parsedId = parseAddressId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.ADDRESSES.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return { id: parsedId };
    }
    await addressApi.remove(parsedId);
    return { id: parsedId };
  });

export { listAddresses, getAddress, createAddress, updateAddress, deleteAddress };
