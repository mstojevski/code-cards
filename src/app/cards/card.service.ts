import { Injectable } from '@angular/core';
import { ICard } from './card';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/filter';


@Injectable()
export class CardService {
  constructor(private _http: HttpClient) {}
  private _cardsUrl = 'app/cards';

  getCards() {
    return this._http
      .get(this._cardsUrl)
      .catch(this.handleError);
  }

  getCard(id: number) {
    return this.getCards().filter((card: ICard) => card.id === id);
  }
  deleteCard(id: number) {
    const url = `${this._cardsUrl}/${id}`;
    this._http.delete(url)
      .subscribe(() => null);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
