import { Component } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import { wishBook } from '../interfaces';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent {
  wishList : wishBook[] = [];

  constructor(private Bookservice: BookserviceService){}
  ngOnInit(): void {
    this.Bookservice.wishList$.subscribe((data : any) => {
      this.wishList = data;
      // console.log(this.bookList)
    })
  }

}
