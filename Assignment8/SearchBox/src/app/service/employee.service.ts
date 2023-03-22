import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { Daum, Root } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url: string = "https://reqres.in/api/users?page=2";
  public data$: BehaviorSubject<Daum[]> = new BehaviorSubject<Daum[]>([]);
  private data!: Daum[];
  private orgData !: Daum[];
  constructor(private http: HttpClient) { }

  getAllEmployee(){
    return this.http.get<Root>(this.url).pipe(
      map((data: Root)=>{
        return data.data;
      }),
      tap((data:Daum[])=>{
        data.sort((p1: Daum, p2: Daum) =>
          p1.last_name < p2.last_name ? -1 : p1.last_name > p2.last_name ? 1 : 0
        );
        this.data = data;
        this.data$.next(data);
        this.orgData = data;
        return data;
      })
    )
  }

  searchByName(name: string){
    let temData: Daum[]= [];
    temData = this.data.filter((eachEm) =>{
      return eachEm.first_name.toLocaleLowerCase().includes(name.toLocaleLowerCase()) || eachEm.last_name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    })
    this.data$.next(temData)
  }
}
