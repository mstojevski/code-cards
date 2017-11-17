import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../../app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../../../environments/environment';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  exports: [AppRoutingModule, HeaderComponent],
  declarations: [HomeComponent, HeaderComponent],
  providers: [],
})
export class CoreModule {}
