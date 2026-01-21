/**
 * Referral Usecase Tests
 * File: referral.usecase.test.js
 */
import {
  listReferrals,
  getReferral,
  createReferral,
  updateReferral,
  deleteReferral,
} from '@features/referral';
import { referralApi } from '@features/referral/referral.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/referral/referral.api', () => ({
  referralApi: {
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

describe('referral.usecase', () => {
  beforeEach(() => {
    referralApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    referralApi.get.mockResolvedValue({ data: { id: '1' } });
    referralApi.create.mockResolvedValue({ data: { id: '1' } });
    referralApi.update.mockResolvedValue({ data: { id: '1' } });
    referralApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listReferrals,
      get: getReferral,
      create: createReferral,
      update: updateReferral,
      remove: deleteReferral,
    },
    { queueRequestIfOffline }
  );
});
