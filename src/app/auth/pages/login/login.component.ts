import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AppSettings } from '../../../app.settings';
import { UserService } from '../../../common/services/user.service';


declare var fluid: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../auth.component.scss']
})
export class LoginComponent implements OnInit {

  activePage: string = 'login';
  isLoaded: boolean = false;
  login_remember: boolean = false;
  redirect: string = '';

  passwordType: string = 'password';

  register: any = {
    username: null,
    password: null,
    confirm_password: null,
    email: null,
    code: null,
    preferredLanguage: null
  };

  validateCode: any = {
    code: null,
    email: null
  };

  reset: any = {
    email: null,
    code: null,
    new_password: null,
    confirm_new_password: null
  };

  login_form: FormGroup;
  matching_passwords_form: FormGroup;
  matching_passwords_form_reset: FormGroup;

  validation_messages: any;

  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private userService: UserService) {

    this.setupValidations();
    if (this.userService.user) {
      this.goHome();
    }

    this.activeRoute.params.subscribe(routeParams => {
      console.log('routeParams', routeParams);
    });
  }

  ngOnInit(): void {

    fluid.init('canvas');

    // this.activeRoute.params.subscribe(routeParams => {
    // this.activePage = routeParams.type;

    //   this.activeRoute.queryParamMap.subscribe(async (params: any) => {
    //     this.redirect = params.params ? params.params.redirect : null;
    //     if (params.params && params.params.email && params.params.code) {
    //       switch (this.activePage) {
    //         case 'register':
    //           this.register.code = params.params.code;
    //           this.register.email = params.params.email;
    //           this.register_form.patchValue({
    //             code: params.params.code
    //           });
    //           this.register_form.patchValue({
    //             email: params.params.email
    //           });
    //           break;
    //         case 'code':
    //           this.validateCode.email = params.params.email;
    //           this.validateCode.code = params.params.code;

    //           // await this.attemptValidateCode();
    //           break;
    //         case 'reset-password':
    //           this.reset.email = params.params.email;
    //           this.reset.code = params.params.code;
    //           this.reset_form.patchValue({
    //             email: this.reset.email
    //           });
    //           this.reset_form.patchValue({
    //             code: this.reset.code
    //           });
    //           break;
    //         default:
    //           break;
    //       }
    //     }
    //   });

    //   setTimeout(() => {
    //     this.isLoaded = true;
    //   }, 500);
    // });
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
      this.isLoaded
        ? this.router.navigate(['/chat'], { replaceUrl: true, relativeTo: this.activeRoute })
        : this.router.navigate(['/login/login'], { replaceUrl: true, relativeTo: this.activeRoute })
    } catch (error) {
      console.error(error);
    }

  }
}
