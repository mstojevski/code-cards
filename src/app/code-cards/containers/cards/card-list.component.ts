import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.interface';
import { CardService } from '../../card.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { NgForm } from '@angular/forms';


import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Component({
  templateUrl: 'card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  cards$: Observable<Card[]>;
  errorMessage: string;
  cardToEdit: Card;
  editStatus = false;
  constructor(private cardService: CardService) {}

  deleteCard(card: Card) {
    this.cardService.deleteCard(card);
  }

  editCard(card: Card) {
    this.editStatus = true;
    this.cardToEdit = card;
  }
  clearState() {
    this.editStatus = false;
  }
  updateCard(card: Card) {
    this.cardService.updateCard(card);
    this.clearState();
  }
  ngOnInit() {
    this.cards$ = this.cardService.getCards();
  }

}
