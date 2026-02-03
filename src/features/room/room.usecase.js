/**
 * Room Use Cases
 * File: room.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { roomApi } from './room.api';
import { normalizeRoom, normalizeRoomList } from './room.model';
import { parseRoomId, parseRoomListParams, parseRoomPayload } from './room.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const getPayload = (response) =>
  (response?.data?.data !== undefined ? response.data.data : response?.data);

const listRooms = async (params = {}) =>
  execute(async () => {
    const parsed = parseRoomListParams(params);
    const response = await roomApi.list(parsed);
    const payload = getPayload(response);
    return normalizeRoomList(Array.isArray(payload) ? payload : []);
  });

const getRoom = async (id) =>
  execute(async () => {
    const parsedId = parseRoomId(id);
    const response = await roomApi.get(parsedId);
    return normalizeRoom(getPayload(response));
  });

const createRoom = async (payload) =>
  execute(async () => {
    const parsed = parseRoomPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.ROOMS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeRoom(parsed);
    }
    const response = await roomApi.create(parsed);
    return normalizeRoom(getPayload(response));
  });

const updateRoom = async (id, payload) =>
  execute(async () => {
    const parsedId = parseRoomId(id);
    const parsed = parseRoomPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.ROOMS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeRoom({ id: parsedId, ...parsed });
    }
    const response = await roomApi.update(parsedId, parsed);
    return normalizeRoom(getPayload(response));
  });

const deleteRoom = async (id) =>
  execute(async () => {
    const parsedId = parseRoomId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.ROOMS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return { id: parsedId };
    }
    await roomApi.remove(parsedId);
    return { id: parsedId };
  });

export { listRooms, getRoom, createRoom, updateRoom, deleteRoom };
