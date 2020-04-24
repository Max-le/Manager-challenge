import {Employee} from "./Employee";

export class Manager extends Employee {
  subordinates: Array<Employee>;
}
