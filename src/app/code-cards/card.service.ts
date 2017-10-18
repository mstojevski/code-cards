import { Card } from './models/card.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class CardService {
  constructor(private http: HttpClient) {}
  private _cardsUrl = 'app/cards';


  getCards(): Observable<Card[]> {
    return this.http
      .get(this._cardsUrl)
      .map((res: any) => res.data as Card[])
      // .map<any, ICard[]>(res => res.data)
      // .do(cards => console.log(cards))
      .catch(this.handleError);
  }

  // storeCards(cards: Card[]) {
  //    return this.http
  //     .post('https://code-cards-api.firebaseio.com/data.json', cards);
  // }

  // getCard(id: number) {
  //   return this.getCards()
  //     .map(cards => cards.filter(c => c.id === id))
  //     .map(cards => cards[0]);
  // }

  getCard(id: number): Observable<Card> {
    const url = `${this._cardsUrl}/${id}`;
    return this.http.get(url)
      .map((res: any) => res.data as Card);
  }

  deleteCard(id: string) {
    const url = `${this._cardsUrl}/${id}`;
    return this.http.delete(url);
<<<<<<< HEAD:src/app/code-cards/card.service.ts
  }
  addCards(card: Card) {
    return this.http.post(this._cardsUrl, card);
=======
>>>>>>> f5260c275af86115014e4a93dc5dff4d680cda27:src/app/code-cards/card.service.ts
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
