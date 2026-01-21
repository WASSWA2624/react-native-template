/**
 * Ward Round Use Cases
 * File: ward-round.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { wardRoundApi } from './ward-round.api';
import { normalizeWardRound, normalizeWardRoundList } from './ward-round.model';
import { parseWardRoundId, parseWardRoundListParams, parseWardRoundPayload } from './ward-round.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listWardRounds = async (params = {}) =>
  execute(async () => {
    const parsed = parseWardRoundListParams(params);
    const response = await wardRoundApi.list(parsed);
    return normalizeWardRoundList(response.data);
  });

const getWardRound = async (id) =>
  execute(async () => {
    const parsedId = parseWardRoundId(id);
    const response = await wardRoundApi.get(parsedId);
    return normalizeWardRound(response.data);
  });

const createWardRound = async (payload) =>
  execute(async () => {
    const parsed = parseWardRoundPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.WARD_ROUNDS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeWardRound(parsed);
    }
    const response = await wardRoundApi.create(parsed);
    return normalizeWardRound(response.data);
  });

const updateWardRound = async (id, payload) =>
  execute(async () => {
    const parsedId = parseWardRoundId(id);
    const parsed = parseWardRoundPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.WARD_ROUNDS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeWardRound({ id: parsedId, ...parsed });
    }
    const response = await wardRoundApi.update(parsedId, parsed);
    return normalizeWardRound(response.data);
  });

const deleteWardRound = async (id) =>
  execute(async () => {
    const parsedId = parseWardRoundId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.WARD_ROUNDS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeWardRound({ id: parsedId });
    }
    const response = await wardRoundApi.remove(parsedId);
    return normalizeWardRound(response.data);
  });

export { listWardRounds, getWardRound, createWardRound, updateWardRound, deleteWardRound };
