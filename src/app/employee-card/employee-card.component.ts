import {Component, Input, OnInit} from '@angular/core';
import {Employee} from "../../models/Employee";

@Component({
  selector: 'app-employee-card',
  template: `
    <mat-card>
        <mat-card-title>{{employee.name}}</mat-card-title>
        <mat-card-subtitle>{{employee.constructor.name}}</mat-card-subtitle>
        <mat-card-content>Salary : {{employee.salary}} €</mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {
  @Input() employee: Employee;

  constructor() { }

  ngOnInit(): void {
  }

}
