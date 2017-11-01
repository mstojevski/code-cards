import { CardService } from '../../card.service';
import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.interface';
import 'codemirror/mode/javascript/javascript';

import { Router } from '@angular/router';

import { UUID } from 'angular2-uuid';

@Component({
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css'],
})
export class AddCardComponent implements OnInit {
  cards: Card[];
  code;
  config = {
    lineNumbers: true,
    theme: 'material',
    tabSize: 2,
    mode: 'javascript',
  };

  public generateId() {
    return Math.round(Math.random() * 10000);
  }
  onAdd(title, code, desc) {
    const newCard: Card = {
      title: title,
      code: code,
      category: 'js',
      description: desc,
    };
    this.cardService.addCard(newCard);
    this.route.navigate(['/cards']);
  }

  constructor(private cardService: CardService, private route: Router) {
    this.code = '';
  }

  ngOnInit() {
    this.cardService.getCards();
    // .subscribe((cards: Card[]) => (this.cards = cards));
  }
}
