import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './menus/components/navbar/navbar.component';

const routes: Routes = [
  { path: '', redirectTo: 'login/login', pathMatch: 'full' },
  { path: 'chat', component: NavbarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
