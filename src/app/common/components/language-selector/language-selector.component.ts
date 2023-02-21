import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent {


  langs: string[] = [];
  iconLang : string = '../../../../../assets/img/imgLenguages/es.png';

  constructor(
    private translate: TranslateService
  ) {
    this.langs = this.translate.getLangs();
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    this.iconLang = "";
    this.iconLang = '../../../../../assets/img/imgLenguages/' + lang + '.png';
    //console.log(this.iconLang);
  }
}
