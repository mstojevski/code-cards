import { CardService } from '../../card.service';
import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.interface';
import 'codemirror/mode/javascript/javascript';

import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss'],
})
export class AddCardComponent implements OnInit {
  cards: Card[];
  code;
  config = {
    lineNumbers: true,
    theme: 'material',
    tabSize: 2,
    mode: 'javascript',
  };

  cardForm: FormGroup;

  addCard() {
    const newCard: Card = {
      title: this.cardForm.get('title').value,
      code: this.cardForm.get('code').value,
      category: 'js',
      description: this.cardForm.get('description').value
    };
    if (this.cardForm.valid) {
      this.cardService.addCard(newCard);
      this.route.navigate(['/cards']);
    }
  }

  constructor(private cardService: CardService, private route: Router) {
    this.code = '';
  }

  ngOnInit() {
    this.cardService.getCards();
    this.cardForm = new FormGroup({
      'title': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'description': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'code': new FormControl(null, {validators: Validators.required})
    }, {updateOn: 'blur'});
  }
}
