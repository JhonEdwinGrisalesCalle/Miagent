import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
    {
        path: 'login', component: LoginComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'recover-password', component: RecoverPasswordComponent },
            { path: 'register', component: RegisterComponent },
        ]
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
