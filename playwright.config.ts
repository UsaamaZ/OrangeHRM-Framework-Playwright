import { defineConfig } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['html', { open: 'never' }]
  ],

  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',

    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'setup',

      testDir: './auth',

      testMatch: /auth\.setup\.ts/,
    },

    {
      name: 'chromium',

      testDir: './tests',

      use: {
        browserName: 'chromium',

        viewport: null,

        launchOptions: {
          args: ['--start-maximized']
        },

        storageState: 'playwright/.auth/admin.json',
      },

      dependencies: ['setup'],
    },
  ],
});