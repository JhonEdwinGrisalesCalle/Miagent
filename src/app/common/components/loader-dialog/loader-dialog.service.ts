// import * as _ from 'lodash';
import { Injectable } from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { LoaderDialogComponent } from '@app/common/components/loader-dialog/loader-dialog.component';


@Injectable()
export class LoaderDialogService {

  // dialogs: any[];

  // constructor(public matDialog: any) {
  //   this.dialogs = [];
  // }

  create(options: any) {
    //   const dialogRef = this.matDialog.open(LoaderDialogComponent, {
    //     // width: '250px',
    //     data: options
    // });

    //   this.dialogs.push({ id: dialogRef.id, options: options, dialog: dialogRef });
    //   return dialogRef;
  }

  // setContent(dialogRef: MatDialogRef<any>, text: string) {
  //   const dialog: any = _.filter(this.dialogs, _.matches({id: dialogRef.id}));
  //   if (dialog && dialog.length && dialog[0].options) {
  //     dialog[0].options.content = text;
  //   }
  // }

  // closeAll() {
  //   _.forEach(this.dialogs, (dialog: any) => {
  //     dialog.dialog.close();
  //   });
  // }
}
