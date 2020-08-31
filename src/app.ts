// Code goes here!
class Department {
  //private readonly name: string;
  private employees: string[] = [];

  constructor(private readonly id: number, private name: string) {
    //this.id = id
    //this.name = name
  }

  describe(this: Department) {
    console.log(`Department: ${this.name}\nid: ${this.id}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation(this: Department) {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];

  constructor(id: number, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: number, private reports: string[]) {
    super(id, "Accounting");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new Department(1, "Accounting");

accounting.describe();
accounting.addEmployee("Sven");
accounting.printEmployeeInformation();
