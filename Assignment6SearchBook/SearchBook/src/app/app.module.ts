import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookItemComponent } from './book-item/book-item.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { WishItemComponent } from './wish-item/wish-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchInputComponent,
    BookListComponent,
    BookItemComponent,
    WishListComponent,
    NavBarComponent,
    WishItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
