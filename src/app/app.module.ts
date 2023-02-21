import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './menus/components/navbar/navbar.component';
import { LeftMenuComponent } from './menus/components/left-menu/left-menu.component';
import { LeftSubMenuComponent } from './menus/components/left-sub-menu/left-sub-menu.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'

import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

import { LanguageSelectorComponent } from "./common/components/lenguage-Selector/language-selector/language-selector.component";


export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/', '.json');
}


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NavbarComponent,
        LeftMenuComponent,
        LeftSubMenuComponent,
        LanguageSelectorComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})


export class AppModule { }
