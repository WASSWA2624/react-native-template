/**
 * Ward Round Usecase Tests
 * File: ward-round.usecase.test.js
 */
import {
  listWardRounds,
  getWardRound,
  createWardRound,
  updateWardRound,
  deleteWardRound,
} from '@features/ward-round';
import { wardRoundApi } from '@features/ward-round/ward-round.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/ward-round/ward-round.api', () => ({
  wardRoundApi: {
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  },
}));

jest.mock('@offline/request', () => ({
  queueRequestIfOffline: jest.fn(),
}));

describe('ward-round.usecase', () => {
  beforeEach(() => {
    wardRoundApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    wardRoundApi.get.mockResolvedValue({ data: { id: '1' } });
    wardRoundApi.create.mockResolvedValue({ data: { id: '1' } });
    wardRoundApi.update.mockResolvedValue({ data: { id: '1' } });
    wardRoundApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listWardRounds,
      get: getWardRound,
      create: createWardRound,
      update: updateWardRound,
      remove: deleteWardRound,
    },
    { queueRequestIfOffline }
  );
});
