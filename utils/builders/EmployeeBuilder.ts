export interface Employee{
    firstName: string,
    lastName: string,
    employeeId: string,
    jobTitle?: string,
    middleName?: string
}

export class EmployeeBuilder {
  private employee: Employee = {
    firstName: '',
    lastName: '',
    employeeId: '',
  };

  withFirstName(name: string) {
    this.employee.firstName = name;
    return this;
  }

  withLastName(name: string) {
    this.employee.lastName = name;
    return this;
  }

  withMiddleName(name: string) {
    this.employee.middleName = name;
    return this;
  }

  withEmployeeId(id: string) {
    this.employee.employeeId = id;
    return this;
  }

  withJobTitle(title: string) {
    this.employee.jobTitle = title;
    return this;
  }


build(): Employee {
    if (!this.employee.firstName || !this.employee.lastName) {
      throw new Error('firstName and lastName are required');
    }
    return { ...this.employee };
  }
}