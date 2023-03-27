import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Subject, tap } from 'rxjs';
import { Daum, Root } from './interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private url : string = "https://reqres.in/api/users?page=2"
  public userList$ = new Subject<Daum[]>();

  constructor(private http: HttpClient) { }


  getData(){
    return this.http.get<Root>(this.url).pipe(
      map((data: Root) =>{
        return data.data;
      }),
      tap((data)=>{
        this.userList$.next(data)
        return data;
      }),
      catchError((err : any) =>{
        console.log(err);
        return err
      })
    )
  }
}
