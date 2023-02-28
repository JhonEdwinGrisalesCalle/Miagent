import { Component } from '@angular/core';
import { UserService } from '@app/common/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  state:boolean;
  selectOptionName: string;

  constructor(private userService: UserService) {
   }

  nameUser = this.userService.user?.email || 'undefined';


  logout() {
    this.userService.logout();
  }

  stateUser(state: boolean){
    this.state= state;
  }

  optionSelected(selectOptionName: string){
    this.selectOptionName= selectOptionName;
    //console.log(this.selectOptionName,"seleccionnnn")

  }
}


