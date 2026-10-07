import { APIRequestContext } from '@playwright/test';
import { Employee } from './builders/EmployeeBuilder';

export class ApiClient {
  private baseURL = 'https://opensource-demo.orangehrmlive.com';
  private token = '';

  constructor(private request: APIRequestContext) {}

  async login(username = 'Admin', password = 'admin123') {
    const res = await this.request.post(`${this.baseURL}/web/index.php/api/v2/auth/login`, {
      data: { username, password },
    });
    const cookies = await res.headers()['set-cookie'];
    if (cookies) {
      this.token = cookies;
    }
  }

  async createEmployee(employee: Employee) {
    const res = await this.request.post(
      `${this.baseURL}/web/index.php/api/v2/pim/employees`,
      {
        data: {
          firstName: employee.firstName,
          lastName: employee.lastName,
          middleName: employee.middleName ?? '',
          employeeId: employee.employeeId,
        },
      },
    );
    const body = await res.json();
    return body.data;
  }

  async getEmployees() {
    const res = await this.request.get(
      `${this.baseURL}/web/index.php/api/v2/pim/employees`,
    );
    const body = await res.json();
    return body.data;
  }

  async deleteEmployee(empNumber: number) {
    await this.request.delete(
      `${this.baseURL}/web/index.php/api/v2/pim/employees`,
      {
        data: { ids: [empNumber] },
      },
    );
  }
}
