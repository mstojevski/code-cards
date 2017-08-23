import { Injectable } from '@angular/core';
import { ICard } from './card';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class CardService {
  constructor(private _http: HttpClient) {}

  private _cardsUrl = './assets/api/card/cards.json';

  getCards(): Observable<ICard[]> {
  return this._http
    .get<ICard[]>(this._cardsUrl)
    .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
