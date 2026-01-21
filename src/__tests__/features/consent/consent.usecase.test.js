/**
 * Consent Usecase Tests
 * File: consent.usecase.test.js
 */
import { createConsent, deleteConsent, getConsent, listConsents, updateConsent } from '@features/consent';
import { consentApi } from '@features/consent/consent.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/consent/consent.api', () => ({
  consentApi: {
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

describe('consent.usecase', () => {
  beforeEach(() => {
    consentApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    consentApi.get.mockResolvedValue({ data: { id: '1' } });
    consentApi.create.mockResolvedValue({ data: { id: '1' } });
    consentApi.update.mockResolvedValue({ data: { id: '1' } });
    consentApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listConsents,
      get: getConsent,
      create: createConsent,
      update: updateConsent,
      remove: deleteConsent,
    },
    { queueRequestIfOffline }
  );
});
