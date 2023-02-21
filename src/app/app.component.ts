import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppSettings } from './app.settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MIAGENT';

  constructor(public translate: TranslateService){
    this.translate.addLangs(['es','en']);
    this.translate.setDefaultLang('es');
  }
}
