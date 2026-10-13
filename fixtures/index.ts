import { test as base, Page } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import env from '@config';
import '@utils/matchers';

export const test = base.extend<{ authenticatedPage: Page }>({
	authenticatedPage: async ({ page }, use) => {
		const loginPage = new LoginPage(page);
		await loginPage.goto(env.baseURL);
		await loginPage.login(env.username, env.password);
		await page.waitForLoadState('domcontentloaded');
		await use(page);
	},
});

export { expect } from '@playwright/test';
