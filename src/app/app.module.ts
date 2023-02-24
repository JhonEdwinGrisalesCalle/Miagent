import { APP_INITIALIZER, NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'

/* Component Pages */
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { RecoverPasswordComponent } from './auth/pages/recover-password/recover-password.component';

/* Components */
import { AppComponent } from './app.component';
import { NavbarComponent } from './menus/components/navbar/navbar.component';
import { LeftMenuComponent } from './menus/components/left-menu/left-menu.component';
import { LeftSubMenuComponent } from './menus/components/left-sub-menu/left-sub-menu.component';

import { LogoComponent } from './auth/components/logo-component/logo.component';
import { AuthRightPanelComponent } from './auth/components/auth-right-panel/auth-right-panel.component';

import { LanguageSelectorComponent } from "./common/components/language-selector/language-selector.component";

import { ValidationMessageComponent } from './common/components/validation-message/validation-message.component';

/* Modules */
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

/* Services*/
import { UserService } from './common/services/user.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


export function AppLoaderFactory(userService: UserService) {
  return () => {
    return new Promise<void>(async (resolve) => {
      await userService.init();
      resolve();
    });
  };
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftMenuComponent,
    LeftSubMenuComponent,
    LanguageSelectorComponent,
    ValidationMessageComponent,
    LoginComponent,
    RegisterComponent,
    RecoverPasswordComponent,
    LogoComponent,
    AuthRightPanelComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,
    AuthRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    UserService,
    {
      provide: APP_INITIALIZER,
      useFactory: AppLoaderFactory,
      deps: [UserService, Injector],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
