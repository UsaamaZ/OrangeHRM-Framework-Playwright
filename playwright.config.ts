import { defineConfig, devices } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import { ENV } from './src/config/env';

// Resolve the absolute path to auth state file
const authStatePath = path.resolve(process.cwd(), ENV.authStatePath);

export default defineConfig({
  testDir: './',

  globalSetup: require.resolve('./src/setup/global.setup.ts'),

  fullyParallel: false,

  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,

  timeout: ENV.defaultTimeout,

  reporter: [
    ['html', { open: 'never' }],
    ['allure-playwright', { outputFolder: 'allure-results' }],
  ],

  use: {
    baseURL: ENV.baseUrl,

    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    actionTimeout: ENV.defaultTimeout,
  },

  projects: [
    
    // Login Tests (No Storage State)
    {
      name: "login",

      testMatch: /tests\/auth\/.*\.spec\.ts/,

      use: {
        browserName: "chromium",

        // set explicit viewport for login tests
        viewport: { width: 1280, height: 720 },

        launchOptions: {
          headless: process.env.HEADLESS === "true",
          slowMo: 500,
          args: ["--start-maximized"],
        },

        storageState: undefined,
      },
    },

    // Remaining Tests (Uses Storage State)
    {
      name: 'chromium',

      testIgnore: /tests\/auth\/.*\.spec\.ts/,

      use: {
        ...devices['Desktop Chrome'],

        // ensure viewport comes from the device descriptor to avoid null/scale issues
        viewport: devices['Desktop Chrome'].viewport,

        launchOptions: {
          headless: process.env.HEADLESS === 'true',
          slowMo: 500,
          args: ['--start-maximized'],
        },

        storageState: fs.existsSync(authStatePath)
          ? authStatePath
          : undefined,
      },
    },
  ],
});