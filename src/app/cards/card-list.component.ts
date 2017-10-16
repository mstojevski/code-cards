import { Component, OnInit } from '@angular/core';

import { ICard } from './card';
import { CardService } from './card.service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-cardlist',
  templateUrl: 'card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  cards$: Observable<ICard[]>;
  errorMessage: string;
  card: ICard;

  constructor(private cardServ: CardService) {}

  // addCard(card: {id: number, title: string, description: string, category: string, code: string}) {
  //   // this.cards$.map((cards) => cards.push(card));
  //   this.niz.push(card);
  // }
  deleteCard(id: number) {
    this.cardServ
      .deleteCard(id)
      .subscribe(
        () =>
          (this.cards$ = this.cards$.map(
            cards => (cards = cards.filter(c => c.id !== id))
          ))
      );
  }
  ngOnInit() {
    this.cards$ = this.cardServ.getCards();
  }
}
