import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../../models/card.interface';
import { CardService } from '../../card.service';

@Component({
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit {
  card: Card;

  getSingleCard(id: number) {
    this.cardServ.getCard(id)
      .subscribe((data: Card) => this.card = data);
  }
  goBack() {
    this.router.navigate(['/cards']);
  }
  constructor(private activeroute: ActivatedRoute,
      private cardServ: CardService,
      private router: Router) { }

  ngOnInit() {
    const id = +this.activeroute.snapshot.paramMap.get('id');
    this.getSingleCard(id);
  }
}
