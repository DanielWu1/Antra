import { Component, OnInit } from '@angular/core';
import { EachList } from '../interfaces';
import { ListServiceService } from '../listService/list-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // List = new ListServiceService().List;
  List !: EachList[];
  constructor (public ListServiceService: ListServiceService){}
  ngOnInit(): void{
    this.List = this.ListServiceService.List;
  }
}
