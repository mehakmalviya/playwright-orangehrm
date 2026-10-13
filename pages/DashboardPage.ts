import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';

export class DashboardPage extends BasePage {
  readonly heading: Locator;
  readonly sidebar: Sidebar;
  readonly topBar: TopBar;

  constructor(page: Page) {
    super(page);
    this.heading = page.getByRole('heading', { name: 'Dashboard' });
    this.sidebar = new Sidebar(page);
    this.topBar = new TopBar(page);
  }

  async isLoaded() {
    await this.heading.isVisible();
  }

  async navigateTo(menuItem: string) {
    await this.sidebar.navigateTo(menuItem);
  }

  async logout() {
    await this.topBar.logout();
  }
}
