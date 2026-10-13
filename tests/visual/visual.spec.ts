import { test, expect } from '@fixtures';
import env from '@config';

test.describe('Visual regression @visual', () => {
  test('dashboard should match baseline', async ({ page }) => {
    await page.goto('/web/index.php/dashboard/index');
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);

    await expect(page).toHaveScreenshot('dashboard.png', {
      maxDiffPixelRatio: 0.05,
    });
  });

  test('login page should match baseline', async ({ page }) => {
    await page.goto(env.baseURL);
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveScreenshot('login.png', {
      maxDiffPixelRatio: 0.05,
    });
  });
});
