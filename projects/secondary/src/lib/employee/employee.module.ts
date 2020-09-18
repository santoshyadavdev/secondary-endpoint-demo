import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { DepartmentModule } from '../department/department.module';


@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    DepartmentModule
  ],
  exports: [DepartmentModule, EmployeeComponent]
})
export class EmployeeModule { }
