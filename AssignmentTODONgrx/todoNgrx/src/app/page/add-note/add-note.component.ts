import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTodo } from 'src/app/ngrx/todo.actions';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit{

  public form!: FormGroup

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [''],
    })
  }
  add(){
    this.store.dispatch(addTodo({title: this.form.get('title')?.value}));
    this.form.get('title')?.setValue('');
  }
}
