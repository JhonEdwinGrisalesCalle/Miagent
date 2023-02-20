// import { MatDialog } from '@angular/material';
import { Injectable } from '@angular/core';
import { SimpleDialogComponent } from '@app/common/components/simple-dialog/simple-dialog.component';


@Injectable()
export class SimpleDialogService {

  static Buttons = {
    Ok: 0,
    OkCancel: 1,
    YesNo: 2,
    AcceptReject: 3
  };

  static Styles = {
    Simple: 0,
    Full: 1
  };

  // constructor(public matDialog: any) { }

  create(message: string,
    title: string,
    information: string = '',
    button: number = 0,
    allow_outside_click: boolean = false,
    style: number = 0,
    width: string = '200px') {

    // const dialogRef = this.matDialog.open(SimpleDialogComponent, {
    //   data: {
    //     title: title,
    //     message: message,
    //     information: information,
    //     button: button || 0,
    //     style: style || 0,
    //     allow_outside_click: allow_outside_click || false
    //   },
    //   width: width
    // });
    // return dialogRef.afterClosed();
  }
}
