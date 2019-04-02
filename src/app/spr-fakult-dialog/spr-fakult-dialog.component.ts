import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FakultService} from '../../services/fakult.service';
import {Fakult} from '../../classes/fakult';

@Component({
  selector: 'app-spr-fakult-dialog',
  templateUrl: './spr-fakult-dialog.component.html',
  styleUrls: ['./spr-fakult-dialog.component.css']
})
export class SprFakultDialogComponent {

  constructor( public dialogRef: MatDialogRef<SprFakultDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: Fakult,
               private fakultService: FakultService) {
  }

  onSaveClick(): void {
    this.fakultService.save(this.data);
    this.onNoClick();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
