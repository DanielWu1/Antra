import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { note } from 'src/app/service/interface';
import { NoteServiceService } from 'src/app/service/note-service.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit{
  public form!: FormGroup
  public data: note = {
    id: -1,
    title: "",
    contents: ''
  }

  constructor(private fb: FormBuilder, private service: NoteServiceService) { }

  get title(){
    return this.form.get('title');
  }
  get contents(){
    return this.form.get('contents');
  }

  ngOnInit(): void {
    this.service.selectSubject$.subscribe((data) => {
      this.data = data;
      this.revert();
      });
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      contents: ['', [Validators.required]],
    })
  }

  revert(){
    this.title?.setValue(this.data.title);
    this.contents?.setValue(this.data.contents);
  }

  save(){
    if(this.data.id !== -1){
      this.service.editNote(this.data.id, this.title?.value, this.contents?.value)
    }
    else{
      this.service.addNote(this.title?.value, this.contents?.value)
    }
    this.data = {
      id: -1,
      title: "",
      contents: ''
    }
    this.title?.setValue('');
    this.contents?.setValue('');
    this.service.clearSelect();
  }
}
