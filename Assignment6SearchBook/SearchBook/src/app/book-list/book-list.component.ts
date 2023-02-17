import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import { EachBook } from '../interfaces';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  bookList : EachBook[] = [];

  constructor(private Bookservice: BookserviceService){}
  ngOnInit(): void {
    this.Bookservice.bookList$.subscribe((data : any) => {
      this.bookList = data;
      // console.log(this.bookList)
    })
  }

}
