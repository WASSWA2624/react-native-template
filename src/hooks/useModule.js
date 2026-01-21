/**
 * useModule Hook
 * File: useModule.js
 */
import useCrud from '@hooks/useCrud';
import { createModule, deleteModule, getModule, listModules, updateModule } from '@features/module';

const useModule = () =>
  useCrud({
    list: listModules,
    get: getModule,
    create: createModule,
    update: updateModule,
    remove: deleteModule,
  });

export default useModule;
