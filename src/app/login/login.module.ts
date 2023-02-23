import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    RecoverPasswordComponent
  ],
  imports: [RouterModule],
})

export class AppModule { }
