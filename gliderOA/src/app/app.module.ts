import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from './shared/searchFilter/pipe/search-filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    SearchResultsComponent,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
