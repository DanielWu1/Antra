import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../../services/interface';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(Item: Item[], searchText: string): Item[] {
    if (!Item || !searchText) {
      return Item;
    }
    searchText = searchText.toLowerCase();

    return Item.filter(user => {
      const validChars = /^[a-z0-9-]+$/.test(searchText);
      return user.login.toLowerCase().includes(searchText) && validChars;
    });
  }

}
