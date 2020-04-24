import {Employee} from "./Employee";

export class Manager extends Employee {

  constructor(name: string) {
    super(name, null)
  }

  subordinates: Array<Employee>;
}
