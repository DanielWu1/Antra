import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit{
  public form!: FormGroup;
  public flage: boolean = false;

  get nameV(){
    return this.form.get("name") as FormControl;
  }
  get messageV(){
    return this.form.get("message") as FormControl;
  }

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      name:["", [Validators.required]],
      message:["", [Validators.required, Validators.minLength(10)]]
    })
  }
  onSubmit(){
    this.flage = true;
    console.log(this.nameV.value)
  }
}
