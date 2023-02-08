import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { ContainerComponent } from './container/container.component';
import { TopicitemComponent } from './topicitem/topicitem.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ContainerComponent,
    TopicitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
