// Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { CoreModule } from './code-cards/core/core.module';

// Component
import { AppComponent } from './app.component';

// Routing
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
