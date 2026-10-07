import { Page, Locator } from '@playwright/test';

export class TopBar {
	readonly userDropdown: Locator;

	constructor(private page: Page) {
		this.userDropdown = page.locator('.oxd-userdropdown');
	}

	async logout() {
		await this.userDropdown.click();
		await this.page.getByRole('menuitem', { name: 'Logout' }).click();
	}

	async getLoggedInUser() {
		return await this.userDropdown.textContent();
	}
}
