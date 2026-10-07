import { Page, Locator } from '@playwright/test';

export class Sidebar {
	readonly container: Locator;

	constructor(private page: Page) {
		this.container = page.locator('.oxd-sidepanel');
	}

	async navigateTo(menuItem: string) {
		await this.page.getByRole('link', { name: menuItem }).click();
	}

	async isMenuItemVisible(menuItem: string) {
		return await this.page.getByRole('link', { name: menuItem }).isVisible();
	}
}
