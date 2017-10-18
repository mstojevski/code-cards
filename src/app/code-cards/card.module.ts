// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Components
import { CardListComponent } from './containers/cards/card-list.component';
// Service
import { CardService } from './card.service';
import { CardsCountComponent } from './components/cards-count/cards-count.component';


@NgModule({
  declarations: [
    CardListComponent,
    CardsCountComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [CardListComponent],
  providers: [CardService],
})
export class CardModule { }
