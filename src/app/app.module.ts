import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { CardListComponent } from './cards/card-list.component';



import { MdCardModule, MdToolbarModule, MdButtonModule, MdProgressSpinnerModule, MdMenuModule, MdSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardService } from './cards/card.service';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdToolbarModule,
    MdButtonModule,
    MdProgressSpinnerModule,
    MdMenuModule,
    MdSidenavModule,
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
