import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  readonly heading: Locator;
  readonly sidebarMenu: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.getByRole('heading', { name: 'Dashboard' });
    this.sidebarMenu = page.locator('.oxd-sidepanel-body');
  }

  async isLoaded() {
    await this.heading.isVisible();
  }

  async navigateTo(menuItem: string) {
    await this.page.getByRole('link', { name: menuItem }).click();
  }
}