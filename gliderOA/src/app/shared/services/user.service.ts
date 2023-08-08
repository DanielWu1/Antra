import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, catchError, map, tap } from 'rxjs';
import { Item, Root } from './interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = "https://api.github.com/search/users?q=";
  public userList$ = new Subject<Item[]>();

  constructor(private http: HttpClient) { }

  getData(userName: string){
    return this.http.get<Root>(this.url + userName).pipe(
      map((data: Root) =>{
        return data.items;
      }),
      tap((data: Item[]) =>{
        this.userList$.next(data);
        return data;
      }),
      catchError((err: any) =>{
        console.log(err);
        return err;
      })
    )
  }
}
