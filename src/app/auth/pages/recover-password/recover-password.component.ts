import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AppSettings } from '../../../app.settings';

declare var fluid: any;

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['../../auth.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

  recovery_form: FormGroup;

  constructor() {
    this.setupValidations();
  }

  ngOnInit(): void {

    fluid.init('canvas');
  }

  setupValidations(): void {

    this.recovery_form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(AppSettings.VALIDATION.PATTERNS.EMAIL)
      ])
    });



  }
}
