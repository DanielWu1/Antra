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
  

  constructor(private Bookservice: BookserviceService){
  }

  ngOnInit(): void {
    const wishBook1: wishBook = {
      name: this.book.name? this.book.name: "do not have name"
      } as wishBook
    this.subsq = fromEvent(this.card.nativeElement, 'click').pipe(
      tap((_) =>{
        return this.Bookservice.addWishList(wishBook1);
      })
    )
    .subscribe();
  }

  ngOnDestroy(): void {
    this.subsq.unsubscribe();
  }
}
