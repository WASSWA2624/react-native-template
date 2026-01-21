/**
 * Insurance Claim Usecase Tests
 * File: insurance-claim.usecase.test.js
 */
import {
  listInsuranceClaims,
  getInsuranceClaim,
  createInsuranceClaim,
  updateInsuranceClaim,
  deleteInsuranceClaim,
} from '@features/insurance-claim';
import { insuranceClaimApi } from '@features/insurance-claim/insurance-claim.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/insurance-claim/insurance-claim.api', () => ({
  insuranceClaimApi: {
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

describe('insurance-claim.usecase', () => {
  beforeEach(() => {
    insuranceClaimApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    insuranceClaimApi.get.mockResolvedValue({ data: { id: '1' } });
    insuranceClaimApi.create.mockResolvedValue({ data: { id: '1' } });
    insuranceClaimApi.update.mockResolvedValue({ data: { id: '1' } });
    insuranceClaimApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listInsuranceClaims,
      get: getInsuranceClaim,
      create: createInsuranceClaim,
      update: updateInsuranceClaim,
      remove: deleteInsuranceClaim,
    },
    { queueRequestIfOffline }
  );
});
