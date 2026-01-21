/**
 * Anesthesia Record Usecase Tests
 * File: anesthesia-record.usecase.test.js
 */
import {
  listAnesthesiaRecords,
  getAnesthesiaRecord,
  createAnesthesiaRecord,
  updateAnesthesiaRecord,
  deleteAnesthesiaRecord,
} from '@features/anesthesia-record';
import { anesthesiaRecordApi } from '@features/anesthesia-record/anesthesia-record.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/anesthesia-record/anesthesia-record.api', () => ({
  anesthesiaRecordApi: {
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

describe('anesthesia-record.usecase', () => {
  beforeEach(() => {
    anesthesiaRecordApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    anesthesiaRecordApi.get.mockResolvedValue({ data: { id: '1' } });
    anesthesiaRecordApi.create.mockResolvedValue({ data: { id: '1' } });
    anesthesiaRecordApi.update.mockResolvedValue({ data: { id: '1' } });
    anesthesiaRecordApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listAnesthesiaRecords,
      get: getAnesthesiaRecord,
      create: createAnesthesiaRecord,
      update: updateAnesthesiaRecord,
      remove: deleteAnesthesiaRecord,
    },
    { queueRequestIfOffline }
  );
});
