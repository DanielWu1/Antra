import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EachContent } from '../Interfaces/interfaces';

@Component({
  selector: 'app-topicitem',
  templateUrl: './topicitem.component.html',
  styleUrls: ['./topicitem.component.css']
})
export class TopicitemComponent{
  @Input()eachContent !: EachContent; 
  @Output() idemiter = new EventEmitter();
  active: boolean = false;
  divStyle = 'baseState';
  constructor() {};
  getColor() {
    // console.log(typeof this.todo.id);
    this.idemiter.emit(this.eachContent.color);
    if (this.divStyle == 'baseState') {
      this.divStyle = 'activeState';
    } else {
      this.divStyle = 'baseState';
    }
  }
}
