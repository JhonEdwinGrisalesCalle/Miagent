import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'

/* Component Pages */
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';

/* Components*/
import { LogoComponent } from './components/logo-component/logo.component';
import { AuthRightPanelComponent } from './components/auth-right-panel/auth-right-panel.component';

import { ValidationMessageComponent } from '@app/common/components/validation-message/validation-message.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    // RouterModule,
    // ReactiveFormsModule,
  ],
  declarations: [
    // ValidationMessageComponent,
    // LoginComponent,
    // RegisterComponent,
    // RecoverPasswordComponent,
    // LogoComponent,
    // AuthRightPanelComponent,
  ],
  exports: [
    // LoginComponent,
    // RegisterComponent,
    // RecoverPasswordComponent
  ]
})

export class AuthModule { }
