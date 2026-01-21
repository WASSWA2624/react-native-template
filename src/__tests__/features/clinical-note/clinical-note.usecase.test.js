/**
 * Clinical Note Usecase Tests
 * File: clinical-note.usecase.test.js
 */
import {
  listClinicalNotes,
  getClinicalNote,
  createClinicalNote,
  updateClinicalNote,
  deleteClinicalNote,
} from '@features/clinical-note';
import { clinicalNoteApi } from '@features/clinical-note/clinical-note.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/clinical-note/clinical-note.api', () => ({
  clinicalNoteApi: {
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

describe('clinical-note.usecase', () => {
  beforeEach(() => {
    clinicalNoteApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    clinicalNoteApi.get.mockResolvedValue({ data: { id: '1' } });
    clinicalNoteApi.create.mockResolvedValue({ data: { id: '1' } });
    clinicalNoteApi.update.mockResolvedValue({ data: { id: '1' } });
    clinicalNoteApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listClinicalNotes,
      get: getClinicalNote,
      create: createClinicalNote,
      update: updateClinicalNote,
      remove: deleteClinicalNote,
    },
    { queueRequestIfOffline }
  );
});
