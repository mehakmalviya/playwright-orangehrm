import { test, expect } from '@playwright/test';

const BASE = 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2';

test.describe('API tests @api', () => {
  test('should authenticate via API', async ({ request }) => {
    const res = await request.post(`${BASE}/auth/login`, {
      data: { username: 'Admin', password: 'admin123' },
    });
    expect(res.ok()).toBeTruthy();
  });

  test('should fetch employee list', async ({ request }) => {
    const res = await request.get(`${BASE}/pim/employees`);
    expect(res.ok()).toBeTruthy();
    const body = await res.json();
    expect(body.data).toBeDefined();
  });
});
