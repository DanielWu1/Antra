import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, mergeMap, Subscription } from 'rxjs';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, OnDestroy {
  bookname: string = '';
  @ViewChild('inputbook', {static: true}) inputbox !: ElementRef;
  subsq = new Subscription();

  constructor(private Bookservice: BookserviceService){}

  ngOnInit(): void{
    this.subsq = fromEvent(this.inputbox.nativeElement, 'keyup').pipe(
      debounceTime(3000),
      mergeMap((_) =>{
        return this.Bookservice.getBooks(this.bookname);
      })
    )
    .subscribe();
  }

  ngOnDestroy(): void {
    this.subsq.unsubscribe();
  }

}
