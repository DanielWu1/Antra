import { Component } from '@angular/core';
import { EachList } from '../interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  List: EachList[] =[
    {
      name: 'Item 1',
      child: [
        {
          name: 'Item 1.1',
          child: [
            { name: 'Item 1.1.1', child: [] },
            { name: 'Item 1.1.2', child: [] },
            {
              name: 'Item 1.1.3',
              child: [{ name: 'Item 1.1.3.1', child: [] }],
            },
            {
              name: 'Item 1.1.4',
              child: [
                { name: 'Item 1.1.4.1', child: [] },
                { name: 'Item 1.1.4.2', child: [] },
              ],
            },
          ],
        },
        {
          name: 'Item 1.2',
          child: [
            { name: 'Item 1.2.1', child: [] },
            {
              name: 'Item 1.2.2',
              child: [{ name: 'Item 1.2.2.1', child: [] }],
            },
            {
              name: 'Item 1.2.3',
              child: [
                { name: 'Item 1.2.3.1', child: [] },
                {
                  name: 'Item 1.2.3.2',
                  child: [{ name: 'Item 1.2.3.2.1', child: [] }],
                },
                { name: 'Item 1.2.3.3', child: [] },
              ],
            },
          ],
        },
      ],
    },
  ];
}
