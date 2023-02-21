import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppSettings } from './app.settings';

import { UserService } from './common/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // constructor(private userService: UserService) { }

  constructor(
    public translateService: TranslateService
  ) {
    this.translateService.addLangs(AppSettings.LANGUAGES);
    this.translateService.setDefaultLang('es');
    const browserLang: string = this.translateService.getBrowserLang() || 'es';
    if (browserLang) {
      this.translateService.use(browserLang);
    }
  }

  title = 'MIAGENT';

  // logout() {
  //   this.userService.logout();
  // }
}
