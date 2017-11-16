// Module
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { AddCardComponent } from './components/add-card/add-card.component';
import { SingleCardComponent } from './components/single-card/single-card.component';
import { CardListComponent } from './containers/cards/card-list.component';

const routes: Routes = [
  {
    path: '',
    component: CardListComponent,
    children: [
      { path: 'add', component: AddCardComponent },
      { path: 'card/:id', component: SingleCardComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardRoutingModule {}
