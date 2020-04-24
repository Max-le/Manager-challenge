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
  <button mat-button>Calculate</button>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'challenge-spendings';
  employees: Array<Employee> = initDataEmployees();


}

function initDataEmployees(): Array<Employee> {
  let employees: Employee[] = [];
  let man1 = new Manager("Georges");
  let man2 = new Manager("Kim");
  let test1 = new Tester("Max", 500);
  let dev1 = new Developer("Tom", 1000);
  employees.push(man1, man2, test1,dev1);
  return employees;


}
