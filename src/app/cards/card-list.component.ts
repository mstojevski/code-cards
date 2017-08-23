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

  cards: Observable<ICard[]>;
  errorMessage: string;

  constructor(private _cardService: CardService) { }

  ngOnInit(): void {
     this.cards = this._cardService.getCards();
   }
}
