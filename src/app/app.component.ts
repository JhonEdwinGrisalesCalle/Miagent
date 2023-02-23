import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppSettings } from './app.settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public translateService: TranslateService
  ) {
    this.translateService.addLangs(AppSettings.LANGUAGES);
    this.translateService.setDefaultLang('es');
    const browserLang: string = this.translateService.getBrowserLang() || 'es';
    if (browserLang) {
      this.translateService.use(browserLang);
    }
  }

  title = 'MIAGENT';

}
