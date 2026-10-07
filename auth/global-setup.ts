import { test as setup } from '@playwright/test';

setup('authenticate', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForURL('**/dashboard/index');

  await page.context().storageState({ path: 'auth/storageState.json' });
});
