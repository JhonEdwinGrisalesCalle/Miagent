import { Component, Inject, OnChanges } from '@angular/core';
// import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-loader-dialog',
  templateUrl: './loader-dialog.component.html',
  styleUrls: ['./loader-dialog.component.scss']
})
export class LoaderDialogComponent {

  // ---------------------------------------------------------------------------------------
  // PROPERTIES

  dialog_data: any;

  // ---------------------------------------------------------------------------------------
  // CONSTRUCTOR

  // constructor(
  //   public dialogRef: MatDialogRef<LoaderDialogComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: any) {

  //   this.dialog_data = data;
  // }
}
