import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AppSettings } from '../app.settings';
import { UserService } from '../common/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  activePage: string = 'login';
  isLoaded: boolean = false;
  login_remember: boolean = false;

  passwordType: string = 'password';

  login_form: FormGroup;
  recovery_form: FormGroup;
  reset_form: FormGroup;
  code_form: FormGroup;
  resend_code_form: FormGroup;
  matching_passwords_form: FormGroup;
  matching_passwords_form_reset: FormGroup;
  register_form: FormGroup;

  validation_messages: any;

  constructor(private router: Router,
    private userService: UserService) {

    if (this.userService.user) {
      this.goHome();
    }
  }

  ngOnInit() {
    this.setupValidations();
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

  goHome() {
    this.router.navigate(['/chat'], { replaceUrl: true });
  }

  async attemptLogin() {
    try {
      await this.userService.login(this.login_form.value, this.login_remember)
      this.isLoaded = true;
      console.log('test:', this.login_form.value, this.login_remember);
      this.isLoaded
        ? this.router.navigate(['/chat'], { replaceUrl: true })
        : this.router.navigate(['/login'], { replaceUrl: true })

    } catch (error) {
      console.error(error);
    }

  }
}
