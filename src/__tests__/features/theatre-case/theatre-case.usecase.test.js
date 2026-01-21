/**
 * Theatre Case Usecase Tests
 * File: theatre-case.usecase.test.js
 */
import {
  listTheatreCases,
  getTheatreCase,
  createTheatreCase,
  updateTheatreCase,
  deleteTheatreCase,
} from '@features/theatre-case';
import { theatreCaseApi } from '@features/theatre-case/theatre-case.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/theatre-case/theatre-case.api', () => ({
  theatreCaseApi: {
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

describe('theatre-case.usecase', () => {
  beforeEach(() => {
    theatreCaseApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    theatreCaseApi.get.mockResolvedValue({ data: { id: '1' } });
    theatreCaseApi.create.mockResolvedValue({ data: { id: '1' } });
    theatreCaseApi.update.mockResolvedValue({ data: { id: '1' } });
    theatreCaseApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listTheatreCases,
      get: getTheatreCase,
      create: createTheatreCase,
      update: updateTheatreCase,
      remove: deleteTheatreCase,
    },
    { queueRequestIfOffline }
  );
});
