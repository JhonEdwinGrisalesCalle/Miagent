import { LoaderDialogService } from '../components/loader-dialog/loader-dialog.service';
import { SimpleDialogService } from '../components/simple-dialog/simple-dialog.service';
import { Logger } from '@app/common/services/logger.service';
// import { TranslateService } from '@ngx-translate/core';
import { AppSettings } from '@app/app.settings';
import { Injectable } from '@angular/core';

const log = new Logger('AlertService');

@Injectable()
export class AlertService {

  // ---------------------------------------------------------------------------------------
  // PROPERTIES

  private loader: any = '';

  // ---------------------------------------------------------------------------------------
  // CONSTRUCTOR

  constructor(
    // public translateService: TranslateService,
    public loaderDialogService: LoaderDialogService,
    public simpleDialogService: SimpleDialogService
  ) { }


  // ---------------------------------------------------------------------------------------
  // METHODS

  hideLoading(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.loader) {
        // this.loaderDialogService.closeAll();
        this.loader = '';
        setTimeout(() => {
          resolve();
        }, AppSettings.TRANSITION_TIME);
      } else {
        resolve();
      }
    });
  }

  setLoadingContent(content: string): void {
    if (this.loader) {
      // this.translateService.get([content])
      //   .subscribe((values) => {
      //     this.loaderDialogService.setContent(this.loader, values[content]);
      //   });
    }
  }

  showLoading(content: string = ''): Promise<any> {

    return new Promise<void>((resolve, reject) => {

      const getOptions = () => {
        return new Promise((_resolve, _reject) => {
          if (content != null) {
            // this.translateService.get(content)
            //   .subscribe(
            //     (value) => {
            //       _resolve({content: value});
            //     }
            //   );
          } else {
            // _resolve({});
          }
        });
      };

      getOptions()
        .then((options) => {
          this.loader = this.loaderDialogService.create(options);
          resolve();
        });
    });

  }

  showAlert(title: string, message: string): Promise<void> {
    return new Promise((resolve, reject) => {
      // this.translateService.get(['alerts.normal.ok_button', title, message])
      //   .subscribe((values) => {
      //     this.simpleDialogService.create(values[message], values[title], null, SimpleDialogService.Buttons.Ok);
      //   });
      resolve();
    });
  }

  hideLoadingAndShowError(err: string): void {
    this.hideLoading()
      .then(() => {
        this.showErrorAlert(err);
      });
  }

  showErrorAlert(message: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const translations = ['alerts.error.title', 'alerts.error.ok_button'];
      if (message) {
        translations.push(message);
      }
      // this.translateService.get(translations)
      //   .subscribe((values) => {
      //     this.simpleDialogService.create(
      //       message ? values[message] : null,
      //       values['alerts.error.title'],
      //       null,
      //       SimpleDialogService.Buttons.Ok
      //     );
      //   });
      resolve();
    });
  }

  async showConfirmAlert(title: string = '', message: string = ''): Promise<any> {

    const trans = [];

    if (typeof title === 'string') {
      trans.push(title);
    }
    if (typeof message === 'string') {
      trans.push(message);
    }

    const values = { message: 'OK', title: 'OK' };
    // const values = await this.translateService.get(trans).toPromise();

    const dialog = await this.simpleDialogService.create(
      values.message,
      values.title,
      '',
      SimpleDialogService.Buttons.YesNo
    );

    return 'yes de prueba';

  }

}
