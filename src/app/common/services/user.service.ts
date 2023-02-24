import * as _ from 'lodash';
// import { Logger } from '@app/shared/services/logger.service';
import { User } from '@app/common/models/user.model';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '@app/app.settings';
import { Router } from '@angular/router';

import { lastValueFrom } from 'rxjs';
// import {UtilsHelper} from "@app/common/helpers/utils.helper";


// const log = new Logger('UserService');
export const credentialsKey = 'user';

@Injectable()
export class UserService {

  // ---------------------------------------------------------------------------------------
  // PROPERTIES

  user: User | any = null;
  iot_credentials: any;
  response: Object;

  // ---------------------------------------------------------------------------------------
  // CONSTRUCTOR

  constructor(
    private injector: Injector,
    public http: HttpClient
  ) {
  }


  // ---------------------------------------------------------------------------------------
  // METHODS

  // ··································································
  // LOCAL

  public get router(): Router {
    return this.injector.get(Router);
  }

  async init(): Promise<any> {
    try {
      const savedCredentialsLocal = localStorage.getItem(credentialsKey);
      const savedCredentialsSession = sessionStorage.getItem(credentialsKey);

      if (savedCredentialsLocal) {
        this.user = new User(JSON.parse(savedCredentialsLocal));
      } else if (savedCredentialsSession) {
        this.user = new User(JSON.parse(savedCredentialsSession));
      }

      if (this.user) {
        sessionStorage.setItem(credentialsKey, JSON.stringify(this.user));
        await this.myData();
      } else {
        this.setCredentials();
      }

    } catch (e) {
      this.setCredentials();
    }
  }

  goLogin(event?: MouseEvent): void {
    if (event) {
      event.stopPropagation();
    }
    this.router.navigate(['/auth/login'], { replaceUrl: true });
  }

  logout(): void {
    this.setCredentials();
    this.goLogin();
  }

  private setCredentials(user?: User, remember?: boolean) {
    this.user = user || null;
    if (user) {

      if (remember) {
        // lo guardamos en localStorage y sessionStorage
        localStorage.setItem(credentialsKey, JSON.stringify(user));
        sessionStorage.setItem(credentialsKey, JSON.stringify(user));

      } else {
        // solo lo guardamos en sessionStorage
        sessionStorage.setItem(credentialsKey, JSON.stringify(user));
      }
    } else {
      sessionStorage.removeItem(credentialsKey);
      localStorage.removeItem(credentialsKey);
    }
  }

  // ··································································
  // REMOTE

  // LOGIN

  async login(data: any, persistent: boolean = false): Promise<any> {
    try {
      // Replace by proper authentication call
      const options = { headers: AppSettings.getHeaders() };

      const response$ = this.http.post(
        AppSettings.API.USER.LOGIN,
        data,
        options
      );

      this.response = await lastValueFrom(response$);

      const user: User = new User(this.response);

      this.setCredentials(user, persistent);
      return user;

    } catch (e) {
      throw e;
    }
  }

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // REGISTRO

  async register(data: any): Promise<any> {
    try {
      const response$ = this.http.post(
        AppSettings.API.USER.REGISTER,
        data
      );

      this.response = await lastValueFrom(response$);

      return this.response;
    } catch (e) {
      throw e;
    }
  }

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // RECUPERAR CONTRASEÑA

  async recoverPassword(data: any): Promise<any> {
    try {
      const response$ = await this.http.post(
        AppSettings.API.USER.RECOVER_PASSWORD,
        data
      );

      this.response = await lastValueFrom(response$);
      return this.response;

    } catch (e) {
      throw e
    }

  }

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // RESTABLECER CONTRASEÑA

  async resetPassword(data: any): Promise<any> {
    try {
      const response$ = await this.http.post(
        AppSettings.API.USER.RESET_PASSWORD,
        data
      );

      this.response = await lastValueFrom(response$);

      return this.response;

    } catch (e) {
      throw e;
    }
  }

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // MIS DATOS

  async myData(): Promise<any> {

    const response$ = this.http.get(
      AppSettings.API.USER.REFRESHDATA,
      AppSettings.getHttpOptionsWithToken()
    );

    this.response = await lastValueFrom(response$);

    _.assign(this.user, this.response);

    sessionStorage.setItem(credentialsKey, JSON.stringify(this.user));

    return this.response;
  }

  // async getIotCredentials(): Promise<any> {

  //   try {

  //     if (!this.iot_credentials) {
  //       this.iot_credentials = await await this.http.get(
  //         AppSettings.API.TELEMARKETER.GET_IOT_CREDENTIALS,
  //         AppSettings.getHttpOptionsWithToken()
  //       ).toPromise();
  //       setTimeout(() => {
  //         this.iot_credentials = null;
  //       }, 1000 * 60 * 30); // 30 minutos
  //     }
  //     return this.iot_credentials;

  //   } catch (e) {
  //     await UtilsHelper.promiseTimeout(10000);
  //     return await this.getIotCredentials();
  //   }

  // }

}
