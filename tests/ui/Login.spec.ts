import { test, expect } from '../../src/fixture/pageFixture';
import fs from 'fs';
import path from 'path';

const authPath = path.join(process.cwd(), 'auth', 'admin.json');

test('Auth Setup Complete - Verify stored auth state', async () => {
  await test.step('Verify auth state file exists', async () => {
    expect(fs.existsSync(authPath)).toBeTruthy();
  });

  await test.step('Load auth state and verify cookies and origins', async () => {
    const authData = JSON.parse(fs.readFileSync(authPath, 'utf-8'));
    expect(authData.cookies).toBeDefined();
    expect(authData.cookies.length).toBeGreaterThan(0);
    expect(authData.origins).toBeDefined();

    await test.info().attach('auth-state.json', {
      body: Buffer.from(JSON.stringify(authData, null, 2)),
      contentType: 'application/json',
    });
  });
});
