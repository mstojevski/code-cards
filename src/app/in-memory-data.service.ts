import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Card } from './code-cards/models/card.interface';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cards: Card[] = [

      {
        id: 1,
        title: 'Finding Minimun in array',
        category: 'js',
        description: 'Using spread',
        code: 'Kod 1'
      },

      {
        id: 2,
        title: 'Sort numbers',
        category: 'js',
        description: 'Sort using sort method',
        code: 'Kod 2'
      },

      {
        id: 3,
        title: 'Reverse string',
        category: 'js',
        description: 'Reverse string using srj',
        code: 'Kod 3'
      },


      {
        id: 4,
        title: 'CamelCase',
        category: 'js',
        description: 'Capitalize The First Letter Of Each Word',
        code: 'Kod 4'
      },
    ];

    return { cards };
  }
}
