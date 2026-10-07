import { test, expect } from '@playwright/test';

test.describe('Multi-tab @regression', () => {
  test('should handle link opening in new tab', async ({ page, context }) => {
    await page.goto('/web/index.php/dashboard/index');

    const links = page.locator('a[target="_blank"]');
    const count = await links.count();

    if (count > 0) {
      const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        links.first().click(),
      ]);

      await newPage.waitForLoadState();
      expect(newPage.url()).not.toBe('about:blank');
      await newPage.close();
    } else {
      const newPage = await context.newPage();
      await newPage.goto('https://opensource-demo.orangehrmlive.com');
      await expect(newPage.getByPlaceholder('Username')).toBeVisible();

      await page.bringToFront();
      await expect(page.locator('.oxd-topbar')).toBeVisible();

      await newPage.close();
    }
  });
});
