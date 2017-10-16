import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { CardListComponent } from './cards/card-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardService } from './cards/card.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { SingleCardComponent } from './single-card/single-card.component';


@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    WelcomeComponent,
    SingleCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'cards', component: CardListComponent},
      {path: 'cards/:id', component: SingleCardComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
