/**
 * Patient Contact Usecase Tests
 * File: patient-contact.usecase.test.js
 */
import {
  createPatientContact,
  deletePatientContact,
  getPatientContact,
  listPatientContacts,
  updatePatientContact,
} from '@features/patient-contact';
import { patientContactApi } from '@features/patient-contact/patient-contact.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/patient-contact/patient-contact.api', () => ({
  patientContactApi: {
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

describe('patient-contact.usecase', () => {
  beforeEach(() => {
    patientContactApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    patientContactApi.get.mockResolvedValue({ data: { id: '1' } });
    patientContactApi.create.mockResolvedValue({ data: { id: '1' } });
    patientContactApi.update.mockResolvedValue({ data: { id: '1' } });
    patientContactApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listPatientContacts,
      get: getPatientContact,
      create: createPatientContact,
      update: updatePatientContact,
      remove: deletePatientContact,
    },
    { queueRequestIfOffline }
  );
});
