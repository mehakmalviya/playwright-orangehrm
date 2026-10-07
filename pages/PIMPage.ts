import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class PIMPage extends BasePage {
  readonly heading: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly addButton: Locator;
  readonly employeeTable: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.getByRole('heading', { name: 'PIM' });
    this.searchInput = page.getByPlaceholder('Type for hints...');
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.addButton = page.getByRole('button', { name: 'Add' });
    this.employeeTable = page.locator('.oxd-table');
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
}