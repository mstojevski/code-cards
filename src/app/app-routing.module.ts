// Module
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './code-cards/core/home/home.component';
import { PreloadAllModules } from '@angular/router';
// Component
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cards', loadChildren: './code-cards/card.module#CardModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
