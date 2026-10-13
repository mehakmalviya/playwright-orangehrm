import { test as base, Page } from '@playwright/test';
// import { LoginPage } from '@pages/LoginPage';
// import env from '@config';
import '@utils/matchers';

// NOTE: authenticatedPage is redundant with the storageState auth already set up
// by the `setup` project in playwright.config.ts. Every browser project loads
// auth/storageState.json, so the raw `page` fixture is already logged in and
// this fixture would just perform a redundant UI login on top.
//
// Kept here as a template for future role-specific fixtures (e.g. ESS user,
// Manager) that need a fresh UI login as a different user.
//
// export const test = base.extend<{ authenticatedPage: Page }>({
// 	authenticatedPage: async ({ page }, use) => {
// 		const loginPage = new LoginPage(page);
// 		await loginPage.goto(env.baseURL);
// 		await loginPage.login(env.username, env.password);
// 		await page.waitForLoadState('domcontentloaded');
// 		await use(page);
// 	},
// });

export const test = base;
export { expect } from '@playwright/test';
