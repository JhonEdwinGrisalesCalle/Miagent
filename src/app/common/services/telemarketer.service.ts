import {HttpClient} from '@angular/common/http';
import {AppSettings} from '@app/app.settings';
import {Injectable} from '@angular/core';
//import {AlertService} from "@app/shared/services/alert.service";

@Injectable({
  providedIn:'root'
})
export class TelemarketerService {

//   // ---------------------------------------------------------------------------------------
//   // PROPERTIES

//   // ---------------------------------------------------------------------------------------
//   // CONSTRUCTOR
// //public audio;
  constructor(public http: HttpClient) {

  }


//   // ---------------------------------------------------------------------------------------
//   // METHODS

//   // ··································································
//   // LOCAL


  // LISTAR LOS CHATS
  async listChats(): Promise<any> {
    const response = await this.http.get(
      AppSettings.API.TELEMARKETER.GET_CHATS,
      AppSettings.getHttpOptionsWithToken()

    ).toPromise();
    return response;
  }

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // COGER LAS SESIONES DEL CHAT

  async getSessions(chat_id: string, page: number, per_page: number): Promise<any> {
    const response = await this.http.post(
      AppSettings.API.TELEMARKETER.GET_SESSIONS,
      {chat_id, page, per_page},
      AppSettings.getHttpOptionsWithToken()
    ).toPromise();
    //console.log("respuesta",response);

    return response;
  }

//   // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//   // COGER EL DETALLE DE LAS SESIONES

//   async getSessionDetail(session_id: string): Promise<any> {
//     const response = await this.http.post(
//       AppSettings.API.TELEMARKETER.GET_SESSION_DETAIL,
//       {session_id},
//       AppSettings.getHttpOptionsWithToken()
//     ).toPromise();

//     return response;
//   }

//   // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//   // ACTUALIZAR LA SESSION

//   async updateSession(session_id: string, is_disabled: boolean): Promise<any> {
//     const response = await this.http.post(
//       AppSettings.API.TELEMARKETER.UPDATE_SESSION_ACTIVE,
//       {session_id, is_disabled},
//       AppSettings.getHttpOptionsWithToken()
//     ).toPromise();

//     return response;
//   }

//   // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//   async updateStatus(status: string): Promise<any> {
//      const estatus: any=await this.http.post(
//       AppSettings.API.TELEMARKETER.UPDATE_STATUS,
//       {status},
//       AppSettings.getHttpOptionsWithToken()
//     ).toPromise();



//      if (estatus.statusCode && estatus.statusCode==401){
//       location.reload();
//     /*  this.alertService.showErrorAlert('Deslogado por inactividad. Por favor refresca la página.');
//       this.audio = new Audio('https://s3.eu-central-1.amazonaws.com/live.33bot.io/assets/audio/alert.mp3');
//       if (!this.audio.paused) {
//         this.audio.currentTime = 0;
//     }
//     this.audio.volume = 0.3;
//     try {
//       this.audio.play();
//     } catch (e) {
//      // console.error(e);
//     }*/



//   }else{

//   }

//     return estatus
//   }

//   async timeToOffline(): Promise<any> {
//     return await this.http.get(
//       AppSettings.API.TELEMARKETER.TIME_TO_OFFLINE,
//       AppSettings.getHttpOptionsWithToken()
//     ).toPromise();
//   }

//   async sessionsNeedHelp(): Promise<any> {
//     return await this.http.get(
//       AppSettings.API.TELEMARKETER.SESSIONS_NEED_HELP,
//       AppSettings.getHttpOptionsWithToken()
//     ).toPromise();
//   }

//   async assignSession(session_id: string): Promise<any> {
//     return await this.http.post(
//       AppSettings.API.TELEMARKETER.ASSIGN_SESSION,
//       {session_id},
//       AppSettings.getHttpOptionsWithToken()
//     ).toPromise();
//   }

//   async assignedSessionsUnfinished(chat_id: string): Promise<any> {
//     return await this.http.post(
//       AppSettings.API.TELEMARKETER.ASSIGNED_SESSIONS_UNFINISHED,
//       {chat_id},
//       AppSettings.getHttpOptionsWithToken()
//     ).toPromise();
//   }

//   async finishAssignedSession(session_id: string): Promise<any> {
//     return await this.http.post(
//       AppSettings.API.TELEMARKETER.FINISH_ASSIGNED_SESSION,
//       {session_id},
//       AppSettings.getHttpOptionsWithToken()
//     ).toPromise();
//   }

}
