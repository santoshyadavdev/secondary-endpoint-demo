import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './department.component';



@NgModule({
  declarations: [DepartmentComponent],
  imports: [
    CommonModule
  ],
  exports : [DepartmentComponent]
})
export class DepartmentModule { }
