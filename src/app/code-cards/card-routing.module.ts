// Module
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { AddCardComponent } from './components/add-card/add-card.component';
import { SingleCardComponent } from './components/single-card/single-card.component';
import { CardsComponent } from './containers/cards/cards.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CardsComponent },
      { path: 'card/:id', component: SingleCardComponent },
      { path: 'add', component: AddCardComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardRoutingModule { }
