import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AppSettings } from '../app.settings';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  activePage: string = 'login';

  login_remember: boolean = false;
  passwordType: string = 'password';
  isLoaded: boolean = true;

  login_form: FormGroup;
  recovery_form: FormGroup;
  reset_form: FormGroup;
  code_form: FormGroup;
  resend_code_form: FormGroup;
  matching_passwords_form: FormGroup;
  matching_passwords_form_reset: FormGroup;
  register_form: FormGroup;

  validation_messages: any;

  // constructor(
  //   private formBuilder: FormBuilder,) {

  // }

  ngOnInit() {
    this.login_form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(AppSettings.VALIDATION.PATTERNS.EMAIL)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ])
    });
  }

  onHandlerSubmit(): void {
    console.warn(this.login_form.value);
  }

  setupValidations(): void {

    const config_passwords = {
      password: new FormControl('', Validators.compose([
        Validators.minLength(8),
        Validators.required,
        Validators.pattern(AppSettings.VALIDATION.PATTERNS.PASSWORD)
      ])),
      confirm_new_password: new FormControl('', Validators.required)
    };

    // ··········································
    // LOGIN
    this.login_form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(AppSettings.VALIDATION.PATTERNS.EMAIL)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ])
    });

    // ··········································
    // PASSWORD RECOVERY
    this.recovery_form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(AppSettings.VALIDATION.PATTERNS.EMAIL)
      ])
    });

    // ··········································
    // RESET PASSWORD
    this.reset_form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(AppSettings.VALIDATION.PATTERNS.EMAIL)
      ]),
      // matching_passwords: this.matching_passwords_form_reset,
      code: new FormControl('', [
        Validators.required,
      ]),
    });

    // ··········································
    // REGISTER
    this.register_form = new FormGroup({
      user_name: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(AppSettings.VALIDATION.PATTERNS.EMAIL)
      ]),
      // matching_passwords_register: this.matching_passwords_form,
      recaptcha: new FormControl('', [
        Validators.required,
      ]),
      code: new FormControl('', [
        Validators.required,
      ]),
    });

    // ··········································
    // CODE
    this.code_form = new FormGroup({
      code: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(AppSettings.VALIDATION.PATTERNS.EMAIL)
      ]),
    });

    // ··········································
    // RESEND CODE
    this.resend_code_form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(AppSettings.VALIDATION.PATTERNS.EMAIL)
      ]),
    });

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // MENSAJES
    this.validation_messages = {
      'email': [
        { type: 'required', message: AppSettings.VALIDATION.MESSAGES.REQUIRED },
        { type: 'pattern', message: AppSettings.VALIDATION.MESSAGES.INVALID_FORMAT }
      ],
      'password': [
        { type: 'minlength', message: AppSettings.VALIDATION.MESSAGES.MIN_LENGTH },
        { type: 'required', message: AppSettings.VALIDATION.MESSAGES.REQUIRED },
        { type: 'pattern', message: AppSettings.VALIDATION.MESSAGES.PASSWORD_INVALID_FORMAT },
      ],
      'code': [
        { type: 'required', message: AppSettings.VALIDATION.MESSAGES.REQUIRED },
      ],
      'user_name': [
        { type: 'required', message: AppSettings.VALIDATION.MESSAGES.REQUIRED },
      ],
      'matching_passwords': [
        { type: 'areEqual', message: AppSettings.VALIDATION.MESSAGES.MISMATCH }
      ],
    };
  }

  async attemptLogin() {
    try {
      console.log('test:', this.login_form.value, this.login_remember);
      // this.alertService.showLoading('login_page.login.alerts.authenticating');
      // await this.userService.login(this.login, this.login_remember);
      // await this.alertService.hideLoading();
      // this.router.navigate([this.redirect ? this.redirect : '/chat'], { replaceUrl: true });
      // location.reload();
    } catch (e: any) {
      // this.alertService.hideLoadingAndShowError(e.message);
    }
  }
}
