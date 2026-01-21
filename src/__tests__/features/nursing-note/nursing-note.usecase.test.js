/**
 * Nursing Note Usecase Tests
 * File: nursing-note.usecase.test.js
 */
import {
  listNursingNotes,
  getNursingNote,
  createNursingNote,
  updateNursingNote,
  deleteNursingNote,
} from '@features/nursing-note';
import { nursingNoteApi } from '@features/nursing-note/nursing-note.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/nursing-note/nursing-note.api', () => ({
  nursingNoteApi: {
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

describe('nursing-note.usecase', () => {
  beforeEach(() => {
    nursingNoteApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    nursingNoteApi.get.mockResolvedValue({ data: { id: '1' } });
    nursingNoteApi.create.mockResolvedValue({ data: { id: '1' } });
    nursingNoteApi.update.mockResolvedValue({ data: { id: '1' } });
    nursingNoteApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listNursingNotes,
      get: getNursingNote,
      create: createNursingNote,
      update: updateNursingNote,
      remove: deleteNursingNote,
    },
    { queueRequestIfOffline }
  );
});
