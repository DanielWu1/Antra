import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { fromEvent, Subscription, tap } from 'rxjs';
import { BookserviceService } from '../bookservice.service';
import { wishBook } from '../interfaces';

@Component({
  selector: 'app-wish-item',
  templateUrl: './wish-item.component.html',
  styleUrls: ['./wish-item.component.scss']
})
export class WishItemComponent {
  @Input() book !: wishBook;
  @ViewChild('deleteBut', {static: true}) deleteBut !: ElementRef;
  subsq = new Subscription();

  constructor(private Bookservice: BookserviceService){
  }

  ngOnInit(): void {
    
    this.subsq = fromEvent(this.deleteBut.nativeElement, 'click').pipe(
      tap((_) =>{
        return this.Bookservice.deleteWishList(this.book.name);
      })
    )
    .subscribe();
  }

  ngOnDestroy(): void {
    this.subsq.unsubscribe();
  }
}
