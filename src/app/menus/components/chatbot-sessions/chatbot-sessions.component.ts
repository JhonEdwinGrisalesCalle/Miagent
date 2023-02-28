import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TelemarketerService } from '@app/common/services/telemarketer.service';

@Component({
  selector: 'app-chatbot-sessions',
  templateUrl: './chatbot-sessions.component.html',
  styleUrls: ['./chatbot-sessions.component.scss']
})
export class ChatbotSessionsComponent {

  @Input() id_chat : string;

expresionBooleana = true;
  chat_sessions: Array<any> = [];
  page: number = 0;
  per_page: number = 20;
  is_init: boolean = false;

  //id="63c957e956825c0008749d75";

  active_chat_id: string = '';

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
        }
      });
    }

    ngOnInit() {
      this.init();
    }
    async init() {

      if (!this.is_init) {
        this.is_init = true;
        //console.log("sesion recibida",this.id_chat)
        await this.getChatSessions(this.id_chat);

      }
    }



  async getChatSessions(chat_id:any): Promise<any> {

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
