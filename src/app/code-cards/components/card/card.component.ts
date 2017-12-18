import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../../models/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Output() remove = new EventEmitter<Card>();
  constructor() { }

  ngOnInit() {
  }
  deleteCard(card: Card) {
    const remove = window.confirm('Are you sure?');
    if (remove) {
      this.remove.emit(card);
    }

  }

}
