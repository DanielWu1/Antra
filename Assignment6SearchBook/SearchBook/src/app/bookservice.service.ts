import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, Subject, tap } from 'rxjs';
import { apiData, EachBook, wishBook } from './interfaces';

const baseUrl : string = "https://www.googleapis.com/books/v1/volumes?q="
@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  bookList: EachBook[] = [];
  bookList$ =  new Subject();

  wishList: wishBook[] = [];
  wishList$ = new Subject();

  constructor(private http: HttpClient) { }

  getBooks(name:string){
    if(name.trim() !== ''){
      return this.http.get<apiData>(baseUrl + name).pipe(
        tap((data) =>{
          this.bookList = data.items.map((each:any)=>{
            return {
              pickture: each.volumeInfo.imageLinks.smallThumbnail ? each.volumeInfo.imageLinks.smallThumbnail: '',
              name: each.volumeInfo.title ? each.volumeInfo.title: '',
              publisher: each.volumeInfo.publisher ? each.volumeInfo.publisher: '',
              data: each.volumeInfo.publishedDate ? each.volumeInfo.publishedDate: '',
              description: each.volumeInfo.description ? each.volumeInfo.description: '',
            }
          })
          this.bookList$.next(this.bookList);
          console.log(this.bookList);
        }),
        catchError((err : any) =>{
          console.log(err);
          return err
        })
      )
    }
    return of(0);
  }

  addWishList(book: wishBook){
    this.wishList.push(book);
    return this.wishList$.next(this.wishList);
  }

  deleteWishList(name: string){
    this.wishList = this.wishList.filter((data:wishBook)=>{
      return data.name !== name;
    });
    return this.wishList$.next(this.wishList);
  }
}
