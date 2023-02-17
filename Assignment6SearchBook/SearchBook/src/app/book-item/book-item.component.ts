import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subscription, tap } from 'rxjs';
import { BookserviceService } from '../bookservice.service';
import { EachBook, wishBook } from '../interfaces';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() book !: EachBook;
  @ViewChild('card', {static: true}) card !: ElementRef;
  subsq = new Subscription();
  wishBook1!: wishBook
  

  constructor(private Bookservice: BookserviceService){
  }

  ngOnInit(): void {
    this.wishBook1 = {
      name: this.book.name? this.book.name: "do not have name"
      } as wishBook
    this.subsq = fromEvent(this.card.nativeElement, 'click').pipe(
      tap((_) =>{
        return this.Bookservice.addWishList(this.wishBook1);
      })
    )
    .subscribe();
  }

  ngOnDestroy(): void {
    this.subsq.unsubscribe();
  }
}
