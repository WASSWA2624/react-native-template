/**
 * Patient Medical History Usecase Tests
 * File: patient-medical-history.usecase.test.js
 */
import {
  createPatientMedicalHistory,
  deletePatientMedicalHistory,
  getPatientMedicalHistory,
  listPatientMedicalHistories,
  updatePatientMedicalHistory,
} from '@features/patient-medical-history';
import { patientMedicalHistoryApi } from '@features/patient-medical-history/patient-medical-history.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/patient-medical-history/patient-medical-history.api', () => ({
  patientMedicalHistoryApi: {
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

describe('patient-medical-history.usecase', () => {
  beforeEach(() => {
    patientMedicalHistoryApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    patientMedicalHistoryApi.get.mockResolvedValue({ data: { id: '1' } });
    patientMedicalHistoryApi.create.mockResolvedValue({ data: { id: '1' } });
    patientMedicalHistoryApi.update.mockResolvedValue({ data: { id: '1' } });
    patientMedicalHistoryApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listPatientMedicalHistories,
      get: getPatientMedicalHistory,
      create: createPatientMedicalHistory,
      update: updatePatientMedicalHistory,
      remove: deletePatientMedicalHistory,
    },
    { queueRequestIfOffline }
  );
});
