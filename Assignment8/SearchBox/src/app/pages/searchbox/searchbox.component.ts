import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit{
  public form!: FormGroup;

  constructor(private fb: FormBuilder, private Service: EmployeeService) { }
  
  get searchV(){
    return this.form.get('search');
  };

  ngOnInit(): void {
    this.form = this.fb.group({
      search : [''],
    })
    this.searchV?.valueChanges.subscribe((data) =>{
      this.Service.searchByName(data)
    })
  };

}
