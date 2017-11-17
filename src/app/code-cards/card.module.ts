// Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodemirrorModule } from 'ng2-codemirror';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Component
import { CardListComponent } from './containers/cards/card-list.component';
import { CardsCountComponent } from './components/cards-count/cards-count.component';
import { AddCardComponent } from './components/add-card/add-card.component';
import { SingleCardComponent } from './components/single-card/single-card.component';

// Service
import { CardService } from './card.service';
import { CardRoutingModule } from './card-routing.module';

@NgModule({
  declarations: [CardListComponent, CardsCountComponent, AddCardComponent, SingleCardComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, CodemirrorModule, CardRoutingModule],
  exports: [ReactiveFormsModule],
  providers: [CardService],
})
export class CardModule {}
