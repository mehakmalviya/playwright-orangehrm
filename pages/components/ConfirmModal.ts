import { Page, Locator } from '@playwright/test';

export class ConfirmModal {
	readonly modal: Locator;
	readonly confirmButton: Locator;
	readonly cancelButton: Locator;

	constructor(private page: Page) {
		this.modal = page.locator('.oxd-dialog-sheet');
		this.confirmButton = this.modal.getByRole('button', { name: 'Yes, Delete' });
		this.cancelButton = this.modal.getByRole('button', { name: 'No, Cancel' });
	}

	async confirm() {
		await this.confirmButton.click();
	}

	async cancel() {
		await this.cancelButton.click();
	}

	async isVisible() {
		return await this.modal.isVisible();
	}
}
