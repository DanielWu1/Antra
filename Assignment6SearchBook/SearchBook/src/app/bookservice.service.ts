import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { apiData, EachBook } from './interfaces';

const baseUrl : string = "https://www.googleapis.com/books/v1/volumes?q="
@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  bookList: EachBook[] = [];
  bookList$ =  new Subject();

  wishList: EachBook[] = [];
  wishList$ = new Subject();

  constructor(private http: HttpClient) { }

  getBooks(name:string){
    return this.http.get<apiData>(baseUrl + name).pipe(
      tap((data) =>{
        this.bookList = data.items.map((each:any)=>{
          return {
            pickture: each.volumeInfo.imageLinks.smallThumbnail ? each.volumeInfo.imageLinks.smallThumbnail: '',
            name: each.volumeInfo.title ? each.volumeInfo.title: '',
            publisher: each.volumeInfo.title ? each.volumeInfo.publisher: '',
            data: each.volumeInfo.publishedDate ? each.volumeInfo.publishedDate: '',
            description: each.volumeInfo.description ? each.volumeInfo.description: '',
          }
        })
        this.bookList$.next(this.bookList);
        console.log(this.bookList);
      })
    )
  }
}
