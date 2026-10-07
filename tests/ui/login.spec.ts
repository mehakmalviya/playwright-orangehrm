import { expect, test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';

test.describe('Login tests', ()=>{
test('should login with valid credentials @smoke', async ({ page }) => {
	const loginPage = new LoginPage(page);
	const dashboardPage = new DashboardPage(page);

	await loginPage.goto('https://opensource-demo.orangehrmlive.com');
	await loginPage.login('Admin', 'admin123');
	await expect(dashboardPage.heading).toBeVisible();
});

test('should login with invalid credentials', async ({ page }) => {
	const loginPage = new LoginPage(page);
	const dashboardPage = new DashboardPage(page);

	await loginPage.goto('https://opensource-demo.orangehrmlive.com');
	await loginPage.login('Admin', 'admin1234');
	await expect(loginPage.errorMessage).toBeVisible();
})});