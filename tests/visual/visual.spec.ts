import { test, expect } from '../../fixtures';

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
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveScreenshot('login.png', {
      maxDiffPixelRatio: 0.05,
    });
  });
});
