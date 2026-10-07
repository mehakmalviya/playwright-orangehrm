import { test, expect } from '../../fixtures';

test.describe('Mock API @mock', () => {
  test('should display mocked employee data', async ({ authenticatedPage }) => {
    await authenticatedPage.route('**/api/v2/pim/employees**', (route) => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          data: [{ firstName: 'Mock', lastName: 'User', employeeId: '9999' }],
          meta: { total: 1 },
        }),
      });
    });

    await authenticatedPage.goto('/web/index.php/pim/viewEmployeeList');
    await expect(authenticatedPage.locator('.oxd-table')).toContainText('Mock');
  });

  test('should handle API error gracefully', async ({ authenticatedPage }) => {
    await authenticatedPage.route('**/api/v2/pim/employees**', (route) => {
      route.fulfill({ status: 500 });
    });

    await authenticatedPage.goto('/web/index.php/pim/viewEmployeeList');
    await expect(authenticatedPage.locator('.oxd-table')).toBeVisible();
  });
});
