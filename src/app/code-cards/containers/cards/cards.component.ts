import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.interface';
import { CardService } from '../../card.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';



@Component({
  templateUrl: 'cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  cards$: Observable<Card[]>;
  errorMessage: string;
  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cards$ = this.cardService.getCards();
  }
  onRemove(event) {
    this.cardService.deleteCard(event);
  }

}
