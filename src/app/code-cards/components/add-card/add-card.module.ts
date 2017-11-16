import { NgModule } from '@angular/core';
import { AddCardComponent } from './add-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CodemirrorModule } from 'ng2-codemirror';

@NgModule({
  imports: [ReactiveFormsModule, RouterModule, CommonModule, CodemirrorModule],
  exports: [],
  declarations: [AddCardComponent],
  providers: [],
})
export class AddCardModule { }

