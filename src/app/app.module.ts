// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { CardModule } from './code-cards/card.module';

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
    AddCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CardModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'cards', component: CardListComponent},
      {path: 'cards/add', component: AddCardComponent},
      {path: 'cards/:id', component: SingleCardComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
