/**
 * Encounter Usecase Tests
 * File: encounter.usecase.test.js
 */
import {
  listEncounters,
  getEncounter,
  createEncounter,
  updateEncounter,
  deleteEncounter,
} from '@features/encounter';
import { encounterApi } from '@features/encounter/encounter.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/encounter/encounter.api', () => ({
  encounterApi: {
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

describe('encounter.usecase', () => {
  beforeEach(() => {
    encounterApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    encounterApi.get.mockResolvedValue({ data: { id: '1' } });
    encounterApi.create.mockResolvedValue({ data: { id: '1' } });
    encounterApi.update.mockResolvedValue({ data: { id: '1' } });
    encounterApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listEncounters,
      get: getEncounter,
      create: createEncounter,
      update: updateEncounter,
      remove: deleteEncounter,
    },
    { queueRequestIfOffline }
  );
});
