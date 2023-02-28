import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TelemarketerService } from '@app/common/services/telemarketer.service';
import { any } from 'joi';

@Component({
  selector: 'app-user-chatbots',
  templateUrl: './user-chatbots.component.html',
  styleUrls: ['./user-chatbots.component.scss']
})
export class UserChatbotsComponent {

  visible: boolean = false;


  getting_chats: boolean = false;
  chats: any = [];
  active_chat_id: string = '';
  is_init: boolean = false;


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
  }

  async init() {
    if (!this.is_init) {
      this.is_init = true;
      await this.getListChat();

      //await this.getChatSessions(this.chats[0]._id)
      //console.log(this.chats[0]._id)
      // if ((!this.active_chat_id || this.active_chat_id.trim() === '') && !this.appService.isMobile) {
      //   this.goChat(this.chats[0]);
      // }
    }
  }

  async getListChat(): Promise<any> {
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
  selected(value:any){
    this.visible= value;
  };

}


