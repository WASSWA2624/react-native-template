/**
 * Follow Up Usecase Tests
 * File: follow-up.usecase.test.js
 */
import {
  listFollowUps,
  getFollowUp,
  createFollowUp,
  updateFollowUp,
  deleteFollowUp,
} from '@features/follow-up';
import { followUpApi } from '@features/follow-up/follow-up.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/follow-up/follow-up.api', () => ({
  followUpApi: {
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

describe('follow-up.usecase', () => {
  beforeEach(() => {
    followUpApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    followUpApi.get.mockResolvedValue({ data: { id: '1' } });
    followUpApi.create.mockResolvedValue({ data: { id: '1' } });
    followUpApi.update.mockResolvedValue({ data: { id: '1' } });
    followUpApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listFollowUps,
      get: getFollowUp,
      create: createFollowUp,
      update: updateFollowUp,
      remove: deleteFollowUp,
    },
    { queueRequestIfOffline }
  );
});
