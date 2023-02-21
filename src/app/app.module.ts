import { APP_INITIALIZER, NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';

import { NavbarComponent } from './menus/components/navbar/navbar.component';
import { LeftMenuComponent } from './menus/components/left-menu/left-menu.component';
import { LeftSubMenuComponent } from './menus/components/left-sub-menu/left-sub-menu.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'

import { LanguageSelectorComponent } from "./common/components/language-selector/language-selector.component";


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { UserService } from './common/services/user.service';

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
