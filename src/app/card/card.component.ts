import { Component, OnInit, Input } from '@angular/core';
import { ICard } from '../cards/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardsArr: ICard[] = [];
  constructor() { }

  ngOnInit() {
  }

}
