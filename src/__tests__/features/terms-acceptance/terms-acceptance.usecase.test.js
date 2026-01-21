/**
 * Terms Acceptance Usecase Tests
 * File: terms-acceptance.usecase.test.js
 */
import {
  createTermsAcceptance,
  deleteTermsAcceptance,
  getTermsAcceptance,
  listTermsAcceptances,
  updateTermsAcceptance,
} from '@features/terms-acceptance';
import { termsAcceptanceApi } from '@features/terms-acceptance/terms-acceptance.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/terms-acceptance/terms-acceptance.api', () => ({
  termsAcceptanceApi: {
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

describe('terms-acceptance.usecase', () => {
  beforeEach(() => {
    termsAcceptanceApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    termsAcceptanceApi.get.mockResolvedValue({ data: { id: '1' } });
    termsAcceptanceApi.create.mockResolvedValue({ data: { id: '1' } });
    termsAcceptanceApi.update.mockResolvedValue({ data: { id: '1' } });
    termsAcceptanceApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listTermsAcceptances,
      get: getTermsAcceptance,
      create: createTermsAcceptance,
      update: updateTermsAcceptance,
      remove: deleteTermsAcceptance,
    },
    { queueRequestIfOffline }
  );
});
