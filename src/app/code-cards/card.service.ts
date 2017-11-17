// Module
import { Injectable } from '@angular/core';
// Model
import { Card } from './models/card.interface';
// Angular Firestore
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from 'angularfire2/firestore';

// Rxjs
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
