import { test, expect } from '@fixtures';
import { PIMPage } from '@pages/PIMPage';
import { DashboardPage } from '@pages/DashboardPage';
import { DataFactory } from '@utils/DataFactory';

test.describe.serial('Employee CRUD @regression', () => {
  const employee = DataFactory.createEmployee();

  test('should create a new employee', async ({ authenticatedPage }) => {
    const dashboard = new DashboardPage(authenticatedPage);
    const pim = new PIMPage(authenticatedPage);

    await dashboard.navigateTo('PIM');
    await pim.clickAddEmployee();

    await authenticatedPage.getByPlaceholder('First Name').fill(employee.firstName);
    await authenticatedPage.getByPlaceholder('Last Name').fill(employee.lastName);
    await authenticatedPage.getByRole('button', { name: 'Save' }).click();

    await expect(authenticatedPage).toHaveToastMessage('Success');
  });

  test('should search for the created employee', async ({ authenticatedPage }) => {
    const dashboard = new DashboardPage(authenticatedPage);
    const pim = new PIMPage(authenticatedPage);

    await dashboard.navigateTo('PIM');
    await pim.searchEmployee(employee.firstName);

    await expect(pim.employeeTable).toContainText(employee.firstName);
  });

  test('should delete the employee', async ({ authenticatedPage }) => {
    const dashboard = new DashboardPage(authenticatedPage);
    const pim = new PIMPage(authenticatedPage);

    await dashboard.navigateTo('PIM');
    await pim.searchEmployee(employee.firstName);
    await pim.deleteEmployee(employee.firstName);

    await expect(authenticatedPage).toHaveToastMessage('Success');
  });
});
