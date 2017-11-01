// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


// Components
import { CardListComponent } from './containers/cards/card-list.component';
import { CardsCountComponent } from './components/cards-count/cards-count.component';
// Service
import { CardService } from './card.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CardListComponent, CardsCountComponent],
  imports: [CommonModule, RouterModule, HttpModule, FormsModule],
  exports: [CardListComponent],
  providers: [CardService],
})
export class CardModule {}
