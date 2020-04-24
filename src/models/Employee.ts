import {Department} from "./Department";

export class Employee {
  name: String
  department: Department;
  salary: number;
  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
}
