import {TranslateService} from "@ngx-translate/core";
import {AppSettings} from "@app/app.settings";

export class TranslatableModule {
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

}
