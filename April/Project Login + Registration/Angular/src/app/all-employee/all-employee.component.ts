import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../service/employeeservice.service';

@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.css']
})
export class AllEmployeeComponent implements OnInit {
  all_emp_details:any=[];

  constructor(private myservice:EmployeeserviceService) {
    this.myservice.getAllEmployee().subscribe((response)=>{this.all_emp_details=response});
   }

  ngOnInit(): void {
  }

}
