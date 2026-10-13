import { test as setup } from '@playwright/test';
import env from '../config/env';

setup('authenticate', async ({ page }) => {
  await page.goto(`${env.baseURL}/web/index.php/auth/login`);
  await page.getByPlaceholder('Username').fill(env.username);
  await page.getByPlaceholder('Password').fill(env.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForURL('**/dashboard/index');

  await page.context().storageState({ path: 'auth/storageState.json' });
});
