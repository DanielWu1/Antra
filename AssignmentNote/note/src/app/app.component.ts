import { Component } from '@angular/core';
import { note } from './service/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'note';
  selectNote(event: note){
    
  }
}
