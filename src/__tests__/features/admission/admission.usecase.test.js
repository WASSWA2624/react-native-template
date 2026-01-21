/**
 * Admission Usecase Tests
 * File: admission.usecase.test.js
 */
import {
  listAdmissions,
  getAdmission,
  createAdmission,
  updateAdmission,
  deleteAdmission,
} from '@features/admission';
import { admissionApi } from '@features/admission/admission.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/admission/admission.api', () => ({
  admissionApi: {
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

describe('admission.usecase', () => {
  beforeEach(() => {
    admissionApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    admissionApi.get.mockResolvedValue({ data: { id: '1' } });
    admissionApi.create.mockResolvedValue({ data: { id: '1' } });
    admissionApi.update.mockResolvedValue({ data: { id: '1' } });
    admissionApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listAdmissions,
      get: getAdmission,
      create: createAdmission,
      update: updateAdmission,
      remove: deleteAdmission,
    },
    { queueRequestIfOffline }
  );
});
