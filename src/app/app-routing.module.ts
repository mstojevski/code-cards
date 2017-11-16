// Module
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { WelcomeComponent } from './code-cards/components/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'cards', loadChildren: './code-cards/card.module#CardModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
