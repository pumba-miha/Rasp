import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Prepod} from '../../classes/prepod';

@Component({
  selector: 'app-spr-prepod-dialog',
  templateUrl: './spr-prepod-dialog.component.html',
  styleUrls: ['./spr-prepod-dialog.component.css']
})
export class SprPrepodDialogComponent {

  constructor(public dialogRef: MatDialogRef<SprPrepodDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: Prepod) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
