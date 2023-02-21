import { Component } from '@angular/core';
import { UserService } from '@app/common/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private userService: UserService) { }
  logout() {
    this.userService.logout();
  }
}
