import { expect, Locator, Page } from '@playwright/test';

expect.extend({
  async toHaveToastMessage(page: Page, expectedText: string) {
    const toast = page.locator('.oxd-toast');
    try {
      await expect(toast).toContainText(expectedText, { timeout: 5000 });
      return { pass: true, message: () => `Toast showed "${expectedText}"` };
    } catch {
      return { pass: false, message: () => `Expected toast with "${expectedText}" but it did not appear` };
    }
  },

  async toBeVisibleWithText(locator: Locator, expectedText: string) {
    try {
      await expect(locator).toBeVisible({ timeout: 5000 });
      await expect(locator).toContainText(expectedText);
      return { pass: true, message: () => `Element is visible with text "${expectedText}"` };
    } catch {
      return { pass: false, message: () => `Expected element to be visible with "${expectedText}"` };
    }
  },
});

declare global {
  namespace PlaywrightTest {
    interface Matchers<R> {
      toHaveToastMessage(expectedText: string): Promise<R>;
      toBeVisibleWithText(expectedText: string): Promise<R>;
    }
  }
}

export {};
