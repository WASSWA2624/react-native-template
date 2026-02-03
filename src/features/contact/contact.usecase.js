/**
 * Contact Use Cases
 * File: contact.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { contactApi } from './contact.api';
import { normalizeContact, normalizeContactList } from './contact.model';
import { parseContactId, parseContactListParams, parseContactPayload } from './contact.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const getPayload = (response) =>
  (response?.data?.data !== undefined ? response.data.data : response?.data);

const listContacts = async (params = {}) =>
  execute(async () => {
    const parsed = parseContactListParams(params);
    const response = await contactApi.list(parsed);
    const payload = getPayload(response);
    return normalizeContactList(Array.isArray(payload) ? payload : []);
  });

const getContact = async (id) =>
  execute(async () => {
    const parsedId = parseContactId(id);
    const response = await contactApi.get(parsedId);
    return normalizeContact(getPayload(response));
  });

const createContact = async (payload) =>
  execute(async () => {
    const parsed = parseContactPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.CONTACTS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeContact(parsed);
    }
    const response = await contactApi.create(parsed);
    return normalizeContact(getPayload(response));
  });

const updateContact = async (id, payload) =>
  execute(async () => {
    const parsedId = parseContactId(id);
    const parsed = parseContactPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.CONTACTS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeContact({ id: parsedId, ...parsed });
    }
    const response = await contactApi.update(parsedId, parsed);
    return normalizeContact(getPayload(response));
  });

const deleteContact = async (id) =>
  execute(async () => {
    const parsedId = parseContactId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.CONTACTS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return { id: parsedId };
    }
    await contactApi.remove(parsedId);
    return { id: parsedId };
  });

export { listContacts, getContact, createContact, updateContact, deleteContact };
