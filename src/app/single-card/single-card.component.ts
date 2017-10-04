import { ICard } from '../cards/card';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../cards/card.service';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit {
  card: ICard;

  getSingleCard(id: number) {
    this.cardServ.getCard(id).subscribe((data) => this.card = data);
  }
  constructor(private route: ActivatedRoute, private cardServ: CardService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getSingleCard(id);
  }

}
