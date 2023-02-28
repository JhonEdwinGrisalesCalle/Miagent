import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TelemarketerService } from '@app/common/services/telemarketer.service';

@Component({
  selector: 'app-left-sub-menu',
  templateUrl: './left-sub-menu.component.html',
  styleUrls: ['./left-sub-menu.component.scss']
})
export class LeftSubMenuComponent {
  @Input() section_title : string;
  getting_chats: boolean = false;
  chats: any = [];
  active_chat_id: string = '';
  is_init: boolean = false;


  chat_sessions: Array<any> = [];
  page: number = 0;
  per_page: number = 20;

  constructor(
    private router: Router,
    private telemarketerService: TelemarketerService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const params: Array<string> = this.router.url.split('/');
        if (this.router.url[0] === '/') {
          params.splice(0, 1);
        }
        if (params[0] === 'chat') {
          this.active_chat_id = params[1];

        }
        this.init();
      }
    });

    // this.onNewSession = (message) => {
    //   this._onNewSession(message);
    // };

    // this.events.subscribe('new:session', this.onNewSession);
   }


   async init() {
    if (!this.is_init) {
      this.is_init = true;
      await this.getMenu();
      if(this.section_title == undefined ){
        this.section_title= "vertical_navegation.dashboard";
      }
      //await this.getChatSessions(this.chats[0]._id)
      //console.log(this.chats[0]._id)
      // if ((!this.active_chat_id || this.active_chat_id.trim() === '') && !this.appService.isMobile) {
      //   this.goChat(this.chats[0]);
      // }
    }
  }

   async getMenu(): Promise<any> {
    try {
      if (!this.getting_chats) {
        this.getting_chats = true;
        this.chats = await this.telemarketerService.listChats();
      }
    } catch (err) {
      location.reload();
     // this.alertService.showErrorAlert(err.message);
    }
    this.getting_chats = false;
  }

  /////////////////////////

  async getChatSessions(chat_id:any): Promise<any> {
    console.log(chat_id)

    try {
      const chat_sessions = await this.telemarketerService.getSessions(chat_id, this.page, this.per_page);
      this.chat_sessions = this.chat_sessions.concat(chat_sessions);

      if (chat_id) {
       //await this.getTimeTranslates();
      }
    } catch (err) {

      //this.alertService.showErrorAlert(err.message);
    }
 }
}
