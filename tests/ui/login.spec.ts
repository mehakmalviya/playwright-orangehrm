import { expect, test } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { DashboardPage } from '@pages/DashboardPage';
import env from '@config';

test.describe('Login tests', () => {
	test('should login with valid credentials @smoke', async ({ page }) => {
		const loginPage = new LoginPage(page);
		const dashboardPage = new DashboardPage(page);

		await loginPage.goto(env.baseURL);
		await loginPage.login(env.username, env.password);
		await expect(dashboardPage.heading).toBeVisible();
	});

	test('should login with invalid credentials', async ({ page }) => {
		const loginPage = new LoginPage(page);

		await loginPage.goto(env.baseURL);
		await loginPage.login(env.username, 'wrong-password');
		await expect(loginPage.errorMessage).toBeVisible();
	});
});
