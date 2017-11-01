import { Card } from '../../models/card.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-count',
  templateUrl: './cards-count.component.html',
  styleUrls: ['./cards-count.component.css']
})
export class CardsCountComponent implements OnInit {

  @Input() cards: Card[];

  constructor() { }

  ngOnInit() {
  }
}
