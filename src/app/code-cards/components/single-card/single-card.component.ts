import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../../models/card.interface';
import { CardService } from '../../card.service';

import { Observable } from 'rxjs/Observable';

import {
  AngularFirestoreDocument,
} from 'angularfire2/firestore';


@Component({
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss']
})
export class SingleCardComponent implements OnInit {
  card$: Observable<Card>;

  getSingleCard(id: string) {
    return this.cardServ.getSingleCard(id);
  }
  goBack() {
    this.router.navigate(['/cards']);
  }
  constructor(private activeroute: ActivatedRoute,
      private cardServ: CardService,
      private router: Router) { }

  ngOnInit() {
    const id = this.activeroute.snapshot.paramMap.get('id');
    this.card$ = this.getSingleCard(id);
  }
}
