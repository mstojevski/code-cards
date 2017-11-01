import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../../models/card.interface';
import { CardService } from '../../card.service';


import {
  AngularFirestoreDocument,
} from 'angularfire2/firestore';
import { Subscription } from 'rxjs/Subscription';


@Component({
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit, OnDestroy {
  card: Card;
  singleCardSub: Subscription;
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
    this.singleCardSub = this.getSingleCard(id).subscribe((payload: Card) => this.card = payload);
  }
  ngOnDestroy() {
    this.singleCardSub.unsubscribe();
  }
}
