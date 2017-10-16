import { Injectable } from '@angular/core';
import { ICard } from './card';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class CardService {
  constructor(private _http: HttpClient) {}
  private _cardsUrl = 'app/cards';

  getCards(): Observable<ICard[]> {
    return this._http
      .get(this._cardsUrl)
      .map((res: any) => res.data as ICard[])
      // .map<any, ICard[]>(res => res.data)

      // .do(cards => console.log(cards))
      .catch(this.handleError);
  }

  // getCard(id: number) {
  //   return this.getCards()
  //     .map(cards => cards.filter(c => c.id === id))
  //     .map(cards => cards[0]);
  // }

  getCard(id: number): Observable<ICard> {
    const url = `${this._cardsUrl}/${id}`;
    return this._http.get(url)
      .map((res: any) => res.data as ICard);
  }

  deleteCard(id: number) {
    const url = `${this._cardsUrl}/${id}`;
    return this._http.delete(url);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
