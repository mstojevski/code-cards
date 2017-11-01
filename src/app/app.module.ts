// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CardModule } from './code-cards/card.module';
import { CodemirrorModule } from 'ng2-codemirror';
// Environment
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Components
import { CardListComponent } from './code-cards/containers/cards/card-list.component';
import { SingleCardComponent } from './code-cards/components/single-card/single-card.component';
import { WelcomeComponent } from './code-cards/components/welcome/welcome.component';
import { AppComponent } from './app.component';
import { AddCardComponent } from './code-cards/components/add-card/add-card.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SingleCardComponent,
    AddCardComponent,
  ],
  imports: [
    BrowserModule,
    CardModule,
    CodemirrorModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'cards', component: CardListComponent },
      { path: 'cards/add', component: AddCardComponent },
      { path: 'cards/card/:id', component: SingleCardComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
