import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import { LoginComponent } from './pages/login/login.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
    {
        path: 'auth', component: LoginComponent,
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
export class AuthRoutingModule { }
