import { Component, Input } from '@angular/core';
import { EachBook } from '../interfaces';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {
  @Input() book !: EachBook;
}
