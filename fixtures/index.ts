import { test as base, Page } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import env from '@config';
import '@utils/matchers';

/**
 * Custom fixture: authenticatedPage
 *
 * Performs a fresh UI login and hands the test a logged-in Page.
 * Reads credentials and baseURL from @config, so env-var overrides
 * (ORANGEHRM_USER / ORANGEHRM_PASSWORD / ORANGEHRM_BASE_URL) work.
 *
 * Currently disabled because the `setup` project in playwright.config.ts
 * already writes auth/storageState.json once per run, and every browser
 * project loads it — so the default `page` fixture is already authenticated.
 * This fixture is kept as a template for future role-specific logins
 * (ESS user, Manager, etc.) where a fresh in-browser login is actually needed.
 *
 * To enable: uncomment the extend() block below and change specs to
 *   test('...', async ({ authenticatedPage }) => { ... })
 */

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
