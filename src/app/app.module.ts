import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { CardListComponent } from './cards/card-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardService } from './cards/card.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { CardComponent } from './card/card.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    WelcomeComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 600}),
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'cards', component: CardListComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
