import { CardService } from '../../card.service';
import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.interface';
import { HttpClient } from '@angular/common/http';

import { UUID } from 'angular2-uuid';


@Component({
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css'],
})
export class AddCardComponent implements OnInit {
  cards: Card[];

  public generateId() {
    return Math.round(Math.random() * 10000);
  }
  onAdd(title, code) {
    const newCard: Card = {
      id: UUID.UUID(),
      title: title,
      code: code,
      category: 'js',
      description: null
    };

    return this.cardService.addCards(newCard).subscribe(() => {
      this.cards.push(newCard);
    });
  }

  constructor(private http: HttpClient, private cardService: CardService) {}

  ngOnInit() {
    this.cardService
      .getCards()
      .subscribe((cards: Card[]) => (this.cards = cards));
  }
}
