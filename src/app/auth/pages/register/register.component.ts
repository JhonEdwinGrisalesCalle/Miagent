import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AppSettings } from '../../../app.settings';

declare var fluid: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../auth.component.scss']
})
export class RegisterComponent implements OnInit {


  register_form: FormGroup;

  constructor() {
    this.setupValidations();
  }

  ngOnInit(): void {

    fluid.init('canvas');
  }

  setupValidations(): void {

    this.register_form = new FormGroup({
      user_name: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(AppSettings.VALIDATION.PATTERNS.EMAIL)
      ]),
      // recaptcha: new FormControl('', [
      //   Validators.required,
      // ]),
      // code: new FormControl('', [
      //   Validators.required,
      // ]),
    });
  }


}
