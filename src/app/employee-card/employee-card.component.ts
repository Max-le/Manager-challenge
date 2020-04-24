import {Component, Input, OnInit} from '@angular/core';
import {Employee} from "../../models/Employee";
import {Manager} from "../../models/Manager";

@Component({
  selector: 'app-employee-card',
  template: `
    <mat-card>
        <mat-card-title>{{employee.name}}</mat-card-title>
        <mat-card-subtitle>{{employee.constructor.name}}</mat-card-subtitle>
        <mat-card-content>Salary : {{employee.salary}} €</mat-card-content>
                <mat-card-footer *ngIf="employee.constructor.name == 'Manager'" >
                    Subordinates :
                  <span *ngFor="let sub of toManager(employee).subordinates">
                    <em>{{sub.name}}  </em>
                    </span>
                </mat-card-footer>
    </mat-card>
  `,
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {
  @Input() employee: Employee;


  toManager(employee: Employee){
    return (employee as Manager);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
