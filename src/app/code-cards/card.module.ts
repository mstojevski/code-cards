// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { CardListComponent } from './containers/cards/card-list.component';
// Service
import { CardService } from './card.service';


@NgModule({
  declarations: [
    CardListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CardListComponent],
  providers: [CardService],
})
export class CardModule { }
