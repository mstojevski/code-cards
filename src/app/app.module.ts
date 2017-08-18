import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CardListComponent } from './cards/card-list.component';


import { MdCardModule, MdToolbarModule, MdButtonModule, MdProgressSpinnerModule,MdMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardService } from './cards/card.service';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdToolbarModule,
    MdButtonModule,
    MdProgressSpinnerModule,
    MdMenuModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
