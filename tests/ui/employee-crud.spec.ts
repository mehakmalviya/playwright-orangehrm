import { test, expect } from '@fixtures';
import { PIMPage } from '@pages/PIMPage';
import { DashboardPage } from '@pages/DashboardPage';
import { DataFactory } from '@utils/DataFactory';

test.describe.serial('Employee CRUD @regression', () => {
  const employee = DataFactory.createEmployee();

  test('should create a new employee', async ({ page }) => {
    const dashboard = new DashboardPage(page);
    const pim = new PIMPage(page);

    await dashboard.navigateTo('PIM');
    await pim.clickAddEmployee();

    await page.getByPlaceholder('First Name').fill(employee.firstName);
    await page.getByPlaceholder('Last Name').fill(employee.lastName);
    await page.getByRole('button', { name: 'Save' }).click();

    await expect(page).toHaveToastMessage('Success');
  });

  test('should search for the created employee', async ({ page }) => {
    const dashboard = new DashboardPage(page);
    const pim = new PIMPage(page);

    await dashboard.navigateTo('PIM');
    await pim.searchEmployee(employee.firstName);

    await expect(pim.employeeTable).toContainText(employee.firstName);
  });

  test('should delete the employee', async ({ page }) => {
    const dashboard = new DashboardPage(page);
    const pim = new PIMPage(page);

    await dashboard.navigateTo('PIM');
    await pim.searchEmployee(employee.firstName);
    await pim.deleteEmployee(employee.firstName);

    await expect(page).toHaveToastMessage('Success');
  });
});
