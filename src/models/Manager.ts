import {Employee} from "./Employee";

export class Manager extends Employee {
  subordinates: Array<Employee> = [];

  constructor(name: string) {
    super(name, null)
  }

  addSubordinate(employee: Employee){
    this.subordinates.push(employee);
    this.calculateAndSetSalary();
  };

  calculateAndSetSalary(){
    let sumSubordinatesSalary: number = 0;
    for (let sub of this.subordinates){
      sumSubordinatesSalary += sub.salary;
    }
    this.salary = sumSubordinatesSalary + 300;
  }
}
