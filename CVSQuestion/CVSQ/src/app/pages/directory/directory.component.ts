import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Daum } from 'src/app/service/interface';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit{
  public userList!: Daum[]
  constructor(private userService: UserServiceService) { }
  ngOnInit(): void {
    this.userService.userList$.subscribe((data: Daum[]) =>{
      this.userList = data;
    })
    this.userService.getData().subscribe()
    console.log(this.userList)
  }
}
