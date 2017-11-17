// Module
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './code-cards/core/home/home.component';
// Component
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cards', loadChildren: './code-cards/card.module#CardModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
