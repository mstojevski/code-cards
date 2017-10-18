import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.interface';
import { CardService } from '../../card.service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Component({
  templateUrl: 'card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  cards: Card[];
  errorMessage: string;
  card: Card;

  constructor(private cardService: CardService) {}


  deleteCard(id: number) {
    this.cardService
      .deleteCard(id)
      .subscribe(
        () => (this.cards = this.cards.filter((card: Card) => card.id !==  id))
      );
  }

  // onStoreCards() {
  //   this.cardService
  //     .storeCards(this.cards)
  //     .subscribe((data) => console.log(data));
  // }
  ngOnInit() {
    this.cardService
      .getCards()
      .subscribe((cards: Card[]) => (this.cards = cards));
  }
}
