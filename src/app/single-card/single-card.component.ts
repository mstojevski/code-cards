import { ICard } from '../cards/card';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from '../cards/card.service';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit {
  card: ICard;

  getSingleCard(id: number) {
    this.cardServ.getCard(id)
      .subscribe((data: ICard) => this.card = data);
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
