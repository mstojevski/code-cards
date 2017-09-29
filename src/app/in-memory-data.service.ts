import { ICard } from './cards/card';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cards: ICard[] = [
      {
        id: 1,
        title: 'Promises are cool 1',
        category: 'js',
        description: 'This is promises code for your brain 1',
        code: 'ovde pise neki kod 1'
      },

      {
        id: 2,
        title: 'Promises are cool 2',
        category: 'js',
        description: 'This is promises code for your brain 2',
        code: 'ovde pise neki kod 2'
      },
    ];

    return { cards };
  }
}
