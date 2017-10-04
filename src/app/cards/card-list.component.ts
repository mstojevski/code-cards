import { Component, OnInit } from '@angular/core';


import { ICard } from './card';
import { CardService } from './card.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-cardlist',
  templateUrl: 'card-list.component.html',
  styleUrls: ['./card-list.component.css']
})

export class CardListComponent implements OnInit {

  cards: ICard[] = [];
  errorMessage: string;

  constructor(private _cardService: CardService) { }

  deleteCard(id: number) {
    this._cardService.deleteCard(id);
    this.cards = this.cards.filter((card: ICard) => card.id !== id);
  }
  ngOnInit() {
     return this._cardService
        .getCards()
        .subscribe((cards) => this.cards = cards.data);
   }
}
