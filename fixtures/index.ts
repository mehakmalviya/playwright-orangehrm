import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export const test = base.extend<{ authenticatedPage: Page }>({
	authenticatedPage: async ({ page }, use) => {
		const loginPage = new LoginPage(page);
		await loginPage.goto('https://opensource-demo.orangehrmlive.com');
		await loginPage.login('Admin', 'admin123');
		await page.waitForLoadState('domcontentloaded');
		await use(page);
	},
});

export { expect } from '@playwright/test';