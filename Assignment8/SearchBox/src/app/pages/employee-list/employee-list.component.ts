import { Component, OnInit } from '@angular/core';
import { Daum, Root } from 'src/app/service/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit{
  public EmployeeData!: Daum[];
  
  constructor(private Service: EmployeeService) { }
  ngOnInit(): void {
    this.Service.data$.subscribe((data) =>{
      this.EmployeeData = data;
    })
    this.Service.getAllEmployee().subscribe()
    
  }
}
