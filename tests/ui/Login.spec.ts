import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { pause } from '../../src/utils/pause';

test('Auth Setup Complete - Verify stored auth state', async ({ }) => {
  const authPath = path.join(process.cwd(), 'auth', 'admin.json');

  expect(fs.existsSync(authPath)).toBeTruthy();

  const authData = JSON.parse(fs.readFileSync(authPath, 'utf-8'));
  expect(authData.cookies).toBeDefined();
  expect(authData.cookies.length).toBeGreaterThan(0);
  expect(authData.origins).toBeDefined();

  console.log('Auth state file ready');
  await pause(3000);
});