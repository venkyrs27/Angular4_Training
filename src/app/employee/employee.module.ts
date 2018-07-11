import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmployeeComponent],
  providers : [],
  exports :   [ EmployeeComponent]
})
export class EmployeeModule { }
