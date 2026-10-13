import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { ConfirmModal } from './components/ConfirmModal';

export class PIMPage extends BasePage {
  readonly heading: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly addButton: Locator;
  readonly employeeTable: Locator;
  readonly confirmModal: ConfirmModal;

  constructor(page: Page) {
    super(page);
    this.heading = page.getByRole('heading', { name: 'PIM' });
    this.searchInput = page.getByPlaceholder('Type for hints...');
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.addButton = page.getByRole('button', { name: 'Add' });
    this.employeeTable = page.locator('.oxd-table');
    this.confirmModal = new ConfirmModal(page);
  }

  async searchEmployee(name: string) {
    await this.searchInput.fill(name);
    await this.searchButton.click();
  }

  async clickAddEmployee() {
    await this.addButton.click();
  }

  async isEmployeeVisible(name: string) {
    return await this.employeeTable.getByText(name).isVisible();
  }

  async deleteEmployee(name: string) {
    await this.employeeTable
      .locator('.oxd-table-row')
      .filter({ hasText: name })
      .locator('.oxd-icon.bi-trash')
      .click();
    await this.confirmModal.confirm();
  }
}
