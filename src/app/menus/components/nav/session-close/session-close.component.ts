import { Component } from '@angular/core';
import { UserService } from '@app/common/services/user.service';

@Component({
  selector: 'app-session-close',
  templateUrl: './session-close.component.html',
  styleUrls: ['./session-close.component.scss']
})
export class SessionCloseComponent {

  constructor(private userService: UserService) { }
  logout() {
    this.userService.logout();
  }
}
