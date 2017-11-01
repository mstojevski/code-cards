import { Card } from './models/card.interface';
import { Injectable } from '@angular/core';
// import { Http, Response, Headers } from '@angular/http';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class CardService {
  cardsCollection: AngularFirestoreCollection<Card>;
  cards: Observable<Card[]>;
  cardDoc: AngularFirestoreDocument<Card>;

  constructor(public afs: AngularFirestore) {
    this.cardsCollection = this.afs.collection('cards', ref =>
      ref.orderBy('title', 'desc')
    );
    this.cards = this.cardsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Card;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getCards(): Observable<Card[]> {
    return this.cards;
  }

  getSingleCard(id: string): Observable<Card> {
    return this.afs.doc(`cards/${id}`).valueChanges().map((res: any) => res as Card);
  }

  deleteCard(card: Card) {
    this.cardDoc = this.afs.doc(`cards/${card.id}`);
    this.cardDoc.delete();
  }

  updateCard(card: Card) {
    this.cardDoc = this.afs.doc(`cards/${card.id}`);
    this.cardDoc.update(card);
  }

  addCard(card: Card): void {
    this.cardsCollection.add(card);
  }
}
// // Firebase CRUD
// getCards() {
//   // return this.http
//   //   .get(this.url)
//   //   .map((res: Response) => res.json() as Card[]);
//   //   // .map<any, ICard[]>(res => res.data)
//   //   // .do(cards => console.log(cards))
//   //   // .catch(this.handleError);
//   return this.db
//     .list<Card[]>(this.dburl)
//     .valueChanges()
//     .map((data: any) => data as Card[]);
// }
// getCard(id: number): Observable<Card> {
//   const url = `${this.dburl}/${id}`;
//   return this.db.object(url).valueChanges();
// }
// createCard(card: Card): void {
//   this.cardsRef.push(card);
// }
// deleteCard(key): void {
//   const url = `${this.dburl}/${key}`;
//   this.db.list(url).remove(key);
// }

// deleteCard(key: string) {
//   const url = `${this.dburl}/${key}`;
//   return this.db.list(this.dburl).remove(key).then(() => console.log('Item deleted'));

// }

// storeCards(cards: Card[]): Observable<Card[]> {
//   return this.http
//     .put(this.url, cards)
//     .map((response: any) => response as Card[]);
// }

// getCard(id: number) {
//   return this.getCards()
//     .map(cards => cards.filter(c => c.id === id))
//     .map(cards => cards[0]);
// }

// getCard(id: number): Observable<Card> {
//   const url = `${this.url}/${id}`;
//   return this.http.get(url).map((res: Response) => res.json() as Card);
// }

// deleteCard(id: number) {
//   const url = `${this.dburl}/${id}`;
//   return this.http.delete(url);
// }
// addCards(card: Card) {
//   return this.http.post('https://cards-api-78153.firebaseio.com', card);
// }
// private _cardsUrl = 'app/cards';

// private handleError(err: HttpErrorResponse) {
//   console.log(err.message);
//   return Observable.throw(err.message);
// }
// import {
//   AngularFireDatabase,
//   AngularFireObject,
//   AngularFireList,
// } from 'angularfire2/database';

/*
Create == push
Read == Object or list
Update == update or set
Delete == remove
*/

// private url = 'https://cards-api-78153.firebaseio.com/data.json';
// private urlSingle = 'https://cards-api-78153.firebaseio.com/data';

// deleteCard(card: Card) {
//   const singleUrl = `${this.urlSingle}/${card.key$}.json`;
//   return this.http.delete(singleUrl).map((res: any) => res.json());
// }

// createCard(card: Card) {
//   const body = JSON.stringify(card);
//   const headers = new Headers({
//     'Content-type': 'application/json',
//   });
//   return this.http.post(this.url, body, { headers });
// }

// getCards(): Observable<Card[]> {
//   return this.http.get(this.url).map((res: Response) => {
//     const data = res.json();
//     const arr = [];
//     for (const k in data) {
//       if (data) {
//         arr.push(data[k]);
//       }
//     }
//     return arr as Card[];
//   });
// }

// getCard(key$: string): Observable<Card> {
//   const singleUrl = `${this.url} / ${key$}`;
//   return this.http.get(singleUrl).map((res: any) => res.json() as Card);
// }
