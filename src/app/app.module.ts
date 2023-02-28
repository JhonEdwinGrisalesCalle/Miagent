import { APP_INITIALIZER, NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ValidationMessageComponent } from '@app/common/components/validation-message/validation-message.component';

import { NavbarComponent } from './menus/components/nav/navbar/navbar.component';

import { LeftMenuComponent } from './menus/components/left-menu/left-menu.component';
import { LeftSubMenuComponent } from './menus/components/left-sub-menu/left-sub-menu.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';

import { LanguageSelectorComponent } from "./common/components/language-selector/language-selector.component";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { UserService } from './common/services/user.service';
import { SessionCloseComponent } from './menus/components/nav/session-close/session-close.component';
import { StatusAgentComponent } from './menus/components/nav/status-agent/status-agent.component';
import { PauseSelectionComponent } from './menus/components/nav/pause-selection/pause-selection.component';
import { UserChatbotsComponent } from './menus/components/user-chatbots/user-chatbots.component';
import { ChatbotSessionsComponent } from './menus/components/chatbot-sessions/chatbot-sessions.component';
import { TrimPipe } from './menus/pipes/trim.pipe';

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
    LanguageSelectorComponent,
    ValidationMessageComponent,
    SessionCloseComponent,
    StatusAgentComponent,
    PauseSelectionComponent,
    UserChatbotsComponent,
    ChatbotSessionsComponent,
    TrimPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MdbAccordionModule,
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
