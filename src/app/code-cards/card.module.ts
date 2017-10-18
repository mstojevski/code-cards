// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
>>>>>>> f5260c275af86115014e4a93dc5dff4d680cda27

// Components
import { CardListComponent } from './containers/cards/card-list.component';
// Service
import { CardService } from './card.service';
<<<<<<< HEAD
import { CardsCountComponent } from './components/cards-count/cards-count.component';
=======
>>>>>>> f5260c275af86115014e4a93dc5dff4d680cda27


@NgModule({
  declarations: [
    CardListComponent,
<<<<<<< HEAD
    CardsCountComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
=======
  ],
  imports: [
    CommonModule,
    RouterModule
>>>>>>> f5260c275af86115014e4a93dc5dff4d680cda27
  ],
  exports: [CardListComponent],
  providers: [CardService],
})
export class CardModule { }
