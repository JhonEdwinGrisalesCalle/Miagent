import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-right-panel',
  templateUrl: './auth-right-panel.component.html',
  styleUrls: ['../../auth.component.scss', './auth-right-panel.component.scss']
})
export class AuthRightPanelComponent {

  @Input() title = '';
  @Input() description = ''
}
