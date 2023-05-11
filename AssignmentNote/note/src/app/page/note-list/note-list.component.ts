import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { note } from 'src/app/service/interface';
import { NoteServiceService } from 'src/app/service/note-service.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit{
  public dataList!: note[]

  constructor(private service: NoteServiceService) { }

  ngOnInit(): void {
    this.service.noteSubject$.subscribe((e) =>{
      this.dataList = e
    })
    // console.log(this.dataList)
  }

  delete(id:number){
    this.service.deleteNote(id);
  }

  select(note:note){
    // console.log(note);
    this.service.passSelect(note);
  }

  addNew(){
    this.service.clearSelect();
  }
}
