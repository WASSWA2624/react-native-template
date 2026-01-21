/**
 * Patient Usecase Tests
 * File: patient.usecase.test.js
 */
import { createPatient, deletePatient, getPatient, listPatients, updatePatient } from '@features/patient';
import { patientApi } from '@features/patient/patient.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/patient/patient.api', () => ({
  patientApi: {
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

describe('patient.usecase', () => {
  beforeEach(() => {
    patientApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    patientApi.get.mockResolvedValue({ data: { id: '1' } });
    patientApi.create.mockResolvedValue({ data: { id: '1' } });
    patientApi.update.mockResolvedValue({ data: { id: '1' } });
    patientApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listPatients,
      get: getPatient,
      create: createPatient,
      update: updatePatient,
      remove: deletePatient,
    },
    { queueRequestIfOffline }
  );
});
