import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ICard } from './cards/card';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cards: ICard[] = [

      {
        id: 1,
        title: 'Finding Minimun in array',
        category: 'js',
        description: 'Using spread',
        code: `function findSmallestNum(arr) {
          return Math.min(...arr);
        }`
      },

      {
        id: 2,
        title: 'Sort numbers',
        category: 'js',
        description: 'Sort using sort method',
        code: `function sortNumsAscending(arr) {
          return (arr || []).sort((a,b) => a - b)
        }`
      },

      {
        id: 3,
        title: 'Reverse string',
        category: 'js',
        description: 'Reverse string using srj',
        code: `function reverse(str) {
          return str.split('').reverse().join('');
        }`
      },


      {
        id: 4,
        title: 'CamelCase',
        category: 'js',
        description: 'Capitalize The First Letter Of Each Word',
        code: `function makeTitle(str) {
          return str.split(' ').map( w => w[0].toUpperCase() + w.slice(1)).join(' ');
        }`
      },
    ];

    return { cards };
  }
}
