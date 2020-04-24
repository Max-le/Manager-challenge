import { Component } from '@angular/core';
import {Manager} from "../models/Manager";
import {Employee} from "../models/Employee";
import {Tester} from "../models/Tester";
import {Developer} from "../models/Developer";

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to Manager challenge app</h1>

    <div *ngFor="let employee of employees">
      <app-employee-card [employee]=employee></app-employee-card>
    </div>
  <button mat-flat-button color="primary" (click)="updateManagerSalary()">Calculate Manager Paycheck</button>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'challenge-spendings';
  employees: Array<Employee> = initDataEmployees();

  /**
   * Update the salary only if the employee is a manager.
   */
  updateManagerSalary() {
    console.log('Update salary called')
    for (let employee of this.employees){
      if (employee instanceof Manager){
        (employee as Manager).calculateAndSetSalary();
      }
    }
  }
}



function initDataEmployees(): Array<Employee> {
  let employees: Employee[] = [];
  let man1 = new Manager("Georges");
  let man2 = new Manager("Kim");
  let test1 = new Tester("Max", 500);
  let dev1 = new Developer("Tom", 1000);

  man1.addSubordinate(man2);
  man2.addSubordinate(test1);
  man2.addSubordinate(dev1)

  employees.push(man1, man2, test1,dev1);
  return employees;


}
