import { Employee, EmployeeBuilder } from './builders/EmployeeBuilder';

export class DataFactory {
  private static counter = 0;

  static createEmployee(overrides?: Partial<Employee>): Employee {
    const id = ++this.counter;
    return new EmployeeBuilder()
      .withFirstName(overrides?.firstName ?? `Test${id}`)
      .withLastName(overrides?.lastName ?? `User${id}`)
      .withEmployeeId(overrides?.employeeId ?? `${Date.now()}${id}`)
      .withJobTitle(overrides?.jobTitle ?? 'QA Engineer')
      .build();
  }

  static adminCredentials() {
    return { username: 'Admin', password: 'admin123' };
  }
}
