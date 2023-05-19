import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNoteComponent } from './page/add-note/add-note.component';
import { NotelistComponent } from './page/notelist/notelist.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { todoReducer } from './ngrx/todo.reducer';
import { TodoEffects } from './ngrx/todo.effects';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddNoteComponent,
    NotelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([TodoEffects]),
    StoreModule.forRoot({todos: todoReducer}),
  ],
  providers: [TodoEffects],
  bootstrap: [AppComponent]
})
export class AppModule { }
