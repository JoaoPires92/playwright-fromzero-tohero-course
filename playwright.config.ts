import { defineConfig, devices } from '@playwright/test';

 require('dotenv').config();

export default defineConfig({
   timeout: 40000,
   globalTimeout: 60000,
   expect: {
     timeout: 2000
   },

  retries: 1,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    actionTimeout: 20000,
    navigationTimeout:25000,
    video:{
      mode:'on',
      size: {width: 1920, height: 1080}
    }

  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'pageObjectFullScreen',
      testMatch: 'usePageObjectsFaker.spec.ts',
      use:{
        viewport: {width: 1920, height: 1080}
      }
    }

  ],

});
