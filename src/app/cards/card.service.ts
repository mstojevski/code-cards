import { Injectable } from '@angular/core';
import { ICard } from './card';

@Injectable()
export class CardService {

  getCards(): ICard[] {
    return  [
      {
        id: 1,
        title: 'Promises are cool 1 ',
        category: 'js',
        description: 'This is promises code for your brain',
        code: `Array.prototype.map.call(str, function(x) {
          return x;
        }).reverse().join(''); `
      },

      {
        id: 2,
        title: 'Promises are cool 2',
        category: 'js',
        description: 'This is promises code for your brain',
        code: `var output = orders2.reduce((customers, line) => {
          customers[line[0]] = customers[line[0]] || [];
          customers[line[0]].push({
              name: line[1],
              price: line[2],
              quantity: line[3]
          })`
      },

      {
        id: 3,
        title: 'Promises are cool 3',
        category: 'js',
        description: 'This is promises code for your brain',
        code: `var orders2 = [
          ["Mark Johansson", "waffle iron", 80, 2],
          ["Mark Johansson", "blender", 200, 1],
          ["Mark Johansson", "knife", 10, 4],
          ["Nikita Smith", "waffle iron", 80, 1],
          ["Nikita Smith", "knife", 10, 2],
          ["Nikita Smith", "pot", 20, 3]
      ];`
      },

      {
        id: 4,
        title: 'Promises are cool 4',
        category: 'js',
        description: 'This is promises code for your brain',
        code: `myArray = [1,2,3,4];

        myArray.map(function (element) {
          return element + 1;
        });`
      }
    ];
  }

  constructor() { }
}
