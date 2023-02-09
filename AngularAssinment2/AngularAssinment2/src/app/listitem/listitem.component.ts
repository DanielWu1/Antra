import { Component, Input } from '@angular/core';
import { EachList } from '../interfaces';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.css']
})
export class ListitemComponent {
  @Input() each !: EachList;
}
