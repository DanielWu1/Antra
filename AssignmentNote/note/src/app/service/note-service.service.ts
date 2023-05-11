import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { note } from './interface';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  
  public noteSubject$ = new BehaviorSubject<note[]>([]);
  public selectSubject$ = new Subject<note>();
  private data: note[] = [{id: 1, title: 'test', contents: 'just for test'}];

  constructor() {
    this.noteSubject$.next(this.data);
  }

  generateID() {
    return Math.floor(Math.random() * 10000);
  }

  passSelect(data:note){
    // console.log(data)
    this.selectSubject$.next(data);
  }
  clearSelect(){
    this.selectSubject$.next({
      id: -1,
      title: "",
      contents: ''
    })
  }

  addNote(title:string, contents:string){
    let temObj:note = {id: this.generateID(), title: title, contents: contents}
    this.data.push(temObj);
    this.noteSubject$.next(this.data);
  }

  editNote(id: number, title:string, contents:string){
    this.data.forEach((e) =>{
      if(e.id === id){
        e.title = title;
        e.contents = contents;
      }
    })
    this.noteSubject$.next(this.data);
  }

  deleteNote(id:number){
    this.data = this.data.filter((e) => {
      return e.id !== id;
    })
    this.noteSubject$.next(this.data);
  }
}
