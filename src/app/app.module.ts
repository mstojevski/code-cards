// Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

// Environment
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Component
import { WelcomeComponent } from './code-cards/components/welcome/welcome.component';
import { AppComponent } from './app.component';

// Routing
import { AppRoutingModule } from './app-routing.module';
import { CardRoutingModule } from './code-cards/card-routing.module';


@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
