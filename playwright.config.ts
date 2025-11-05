import { defineConfig, devices } from '@playwright/test';

const baseURL = process.env.BASE_URL || 'http://localhost:3000';

export default defineConfig({
  timeout: 30_000,
  use: {
    baseURL,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }], ['list']],
  projects: [
    // Keep smoke fast: Chromium only
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    // You can add firefox/webkit for regression only (see step 3.3)
  ],
});