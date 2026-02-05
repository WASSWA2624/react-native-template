/**
 * Auth Route Group - Removed
 * File: auth-route-group.test.js
 *
 * Auth screens and (auth) route group have been removed.
 * This test documents that (auth) is no longer required.
 */
import fs from 'fs';
import path from 'path';

describe('Auth Route Group (removed)', () => {
  const appDir = path.join(__dirname, '../../app');
  const authGroupDir = path.join(appDir, '(auth)');

  test('(auth) route group is not present', () => {
    expect(fs.existsSync(authGroupDir)).toBe(false);
  });
});
