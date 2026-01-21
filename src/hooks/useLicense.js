/**
 * useLicense Hook
 * File: useLicense.js
 */
import useCrud from '@hooks/useCrud';
import { createLicense, deleteLicense, getLicense, listLicenses, updateLicense } from '@features/license';

const useLicense = () =>
  useCrud({
    list: listLicenses,
    get: getLicense,
    create: createLicense,
    update: updateLicense,
    remove: deleteLicense,
  });

export default useLicense;
