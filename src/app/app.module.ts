import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './menus/components/navbar/navbar.component';
import { LeftMenuComponent } from './menus/components/left-menu/left-menu.component';
import { LeftSubMenuComponent } from './menus/components/left-sub-menu/left-sub-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftMenuComponent,
    LeftSubMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
