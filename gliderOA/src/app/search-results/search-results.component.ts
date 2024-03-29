import { Component, Input } from '@angular/core';
import { Item } from '../shared/services/interface';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  @Input() Item !: Item[];
  @Input() searchText !: string;
}
