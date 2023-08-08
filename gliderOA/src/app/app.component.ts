import { Component, OnInit } from '@angular/core';
import { Item } from './shared/services/interface';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public userList: Item[] = [];
  public serchUser: string = "";
  title = 'gliderOA';

  constructor(private SearchUser: UserService) {}

  ngOnInit(): void {
    this.SearchUser.userList$.subscribe((data: Item[]) =>{
      this.userList = data;
    })
  }
  

  SearchUsers(){
    this.SearchUser.getData(this.serchUser).subscribe();
  }
}
