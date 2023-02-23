import { HttpHeaders } from '@angular/common/http';
import { User } from './common/models/user.model';

export class AppSettings {
  static TEST_MODE = false; //!environment.production;
  static API_BASE_URL = AppSettings.TEST_MODE ? 'http://localhost:5000/api/' : 'https://dev.33bot.io/api/';
  static CHAT_BASE_URL = AppSettings.TEST_MODE ? 'http://localhost:5080/' : 'https://chat.33bot.io/'; // 'https://chat.33bot.io/';
  static API_TS_BASE_URL = AppSettings.TEST_MODE ? 'http://localhost:5001/v1/' : 'https://api.33bot.io/v1/';
  static CONSOLE_APP_URL = AppSettings.TEST_MODE ? 'http://localhost/33bot.io/app/www/index.html' :
    'https://console.33bot.io/app/index.html';
  static API: any = {
    SERVER: {
      NOW: AppSettings.API_TS_BASE_URL + 'server/now',
    },
    USER: {
      LOGIN: AppSettings.API_TS_BASE_URL + 'user/bot-operator/login',
      REGISTER: AppSettings.API_TS_BASE_URL + 'user/bot-operator/register',
      RECOVER_PASSWORD: AppSettings.API_BASE_URL + 'telemarketers/recover_password',
      REFRESHDATA: AppSettings.API_TS_BASE_URL + 'user/my',
      RESET_PASSWORD: AppSettings.API_BASE_URL + 'telemarketers/reset_password',
      GET_IOT_CREDENTIALS: AppSettings.API_BASE_URL + 'users/get_iot_credentials',
    },
    TELEMARKETER: {
      GET_CHATS: AppSettings.API_TS_BASE_URL + 'user/bot-operator/list_chats',
      GET_SESSIONS: AppSettings.API_TS_BASE_URL + 'user/bot-operator/list_sessions',
      GET_SESSION_DETAIL: AppSettings.API_TS_BASE_URL + 'user/bot-operator/detail_session',
      UPDATE_SESSION_ACTIVE: AppSettings.API_TS_BASE_URL + 'user/bot-operator/update_session_active',
      GET_IOT_CREDENTIALS: AppSettings.API_TS_BASE_URL + 'user/bot-operator/iot-credentials',
      UPDATE_STATUS: AppSettings.API_TS_BASE_URL + 'user/bot-operator/update/status',
      TIME_TO_OFFLINE: AppSettings.API_TS_BASE_URL + 'user/bot-operator/time-to-offline',
      SESSIONS_NEED_HELP: AppSettings.API_TS_BASE_URL + 'user/bot-operator/sessions-need-help',
      ASSIGN_SESSION: AppSettings.API_TS_BASE_URL + 'user/bot-operator/assign-session',
      ASSIGNED_SESSIONS_UNFINISHED: AppSettings.API_TS_BASE_URL + 'user/bot-operator/assigned-sessions-unfinished',
      FINISH_ASSIGNED_SESSION: AppSettings.API_TS_BASE_URL + 'user/bot-operator/finish-assigned-session',
    }
  };

  static LANGUAGES: Array<string> = ['es', 'en'];

  static TRANSITION_TIME = 300;

  static VALIDATION: any = {
    PATTERNS: {
      EMAIL: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      ONLY_CHARS: '[a-zA-Z ]*',
      PASSWORD: '^(?=(?:.*\\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\\S{8,}$'
    },
    MESSAGES: {
      REQUIRED: 'Requerido',
      // REQUIRED: 'validation.required',
      INVALID_FORMAT: 'validation.invalid_format',
      MIN_LENGTH: 'validation.min_length',
      MISMATCH: 'validation.mismatch',
      PASSWORD_INVALID_FORMAT: 'validation.password_invalid_format'
    }
  };

  static AVAILABLE_HOSTS = [
    'https://localhost',
    'http://localhost',
    'localhost',
    'http://33bot.io',
    'https://33bot.io',
    'http://pre.33bot.io',
    'https://pre.33bot.io',
    'http://chat.33bot.io',
    'https://chat.33bot.io',
    'wannabot',
    '33bot.io',
    'console.33bot.io',
    'http://console.33bot.io',
    'https://console.33bot.io',
    'http://advicefy.com',
    'https://advicefy.com',
    'advicefy',
    'advicefy.com'];

  static TELEMARKETER_STATUS: any = {
    ONLINE: 'online',
    MISSING: 'missing',
    OFFLINE: 'offline'
  };

  static getHeaders(): HttpHeaders {
    return new HttpHeaders({ 'content-type': 'application/json' });
  }

  static getHeadersToken(user: User): HttpHeaders {
    return new HttpHeaders({ 'content-type': 'application/json', 'Authorization': 'bearer ' + user.token });
  }

  static getHeadersTokenMultiparFormdata(user: User): any {
    return new HttpHeaders({ 'Authorization': user.token });
  }

  static getHeadersTokenRaw(user: User): any {
    return { 'content-type': 'application/json', 'Authorization': user.token };
  }

  static getHttpOptions() {
    return { headers: AppSettings.getHeaders() };
  }

  static getHttpOptionsWithToken() {
    const userInfo = sessionStorage.getItem('user')
    return { headers: AppSettings.getHeadersToken(JSON.parse(userInfo || '{}')) };
  }

}

