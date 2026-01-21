/**
 * Post-Op Note Usecase Tests
 * File: post-op-note.usecase.test.js
 */
import {
  listPostOpNotes,
  getPostOpNote,
  createPostOpNote,
  updatePostOpNote,
  deletePostOpNote,
} from '@features/post-op-note';
import { postOpNoteApi } from '@features/post-op-note/post-op-note.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/post-op-note/post-op-note.api', () => ({
  postOpNoteApi: {
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

describe('post-op-note.usecase', () => {
  beforeEach(() => {
    postOpNoteApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    postOpNoteApi.get.mockResolvedValue({ data: { id: '1' } });
    postOpNoteApi.create.mockResolvedValue({ data: { id: '1' } });
    postOpNoteApi.update.mockResolvedValue({ data: { id: '1' } });
    postOpNoteApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listPostOpNotes,
      get: getPostOpNote,
      create: createPostOpNote,
      update: updatePostOpNote,
      remove: deletePostOpNote,
    },
    { queueRequestIfOffline }
  );
});
