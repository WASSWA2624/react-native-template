/**
 * Patient Document Usecase Tests
 * File: patient-document.usecase.test.js
 */
import {
  createPatientDocument,
  deletePatientDocument,
  getPatientDocument,
  listPatientDocuments,
  updatePatientDocument,
} from '@features/patient-document';
import { patientDocumentApi } from '@features/patient-document/patient-document.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/patient-document/patient-document.api', () => ({
  patientDocumentApi: {
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

describe('patient-document.usecase', () => {
  beforeEach(() => {
    patientDocumentApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    patientDocumentApi.get.mockResolvedValue({ data: { id: '1' } });
    patientDocumentApi.create.mockResolvedValue({ data: { id: '1' } });
    patientDocumentApi.update.mockResolvedValue({ data: { id: '1' } });
    patientDocumentApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listPatientDocuments,
      get: getPatientDocument,
      create: createPatientDocument,
      update: updatePatientDocument,
      remove: deletePatientDocument,
    },
    { queueRequestIfOffline }
  );
});
