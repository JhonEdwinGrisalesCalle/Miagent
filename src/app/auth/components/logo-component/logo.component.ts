import { Component } from '@angular/core';
import { AppSettings } from '@app/app.settings';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {

  logoURL: String = AppSettings.LOGO_URL;

}
