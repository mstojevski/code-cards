import { Component, OnInit } from '@angular/core';

import { ICard } from './card';
import { CardService } from './card.service';

@Component({
  selector: 'app-cardlist',
  templateUrl: 'card-list.component.html',
  styleUrls: ['./card-list.component.css']
})

export class CardListComponent implements OnInit {

  cards: ICard[] = [];
  errorMessage: string;

  constructor(private _cardService: CardService) { }

  ngOnInit() {
    return this._cardService
      .getCards()
      .subscribe((cards) => this.cards = cards,
      error => this.errorMessage = <any> error);
   }
}
