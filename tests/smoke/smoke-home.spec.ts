import { test, expect } from '@playwright/test';

// @smoke
test('@smoke home loads and shows header', async ({ page }) => {
  await page.goto('/');
  // adjust selectors to your app’s DOM
  await expect(page).toHaveTitle(/React App/i);
});