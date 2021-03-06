import {Component, Inject, OnInit} from '@angular/core';
import {Fakult} from '../../classes/fakult';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {KafedrService} from '../../services/kafedr.service';
import {Kafedr} from '../../classes/kafedr';
import {FakultService} from '../../services/fakult.service';

@Component({
  selector: 'app-spr-kafedr-dialog',
  templateUrl: './spr-kafedr-dialog.component.html',
  styleUrls: ['./spr-kafedr-dialog.component.css']
})
export class SprKafedrDialogComponent {
  private fakult: Fakult[] = [];

  constructor( public dialogRef: MatDialogRef<SprKafedrDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: Kafedr,
               private kafedrService: KafedrService,
               private fakultService: FakultService) {
    this.getFakult();
  }

  private async getFakult() {
    this.fakult = await this.fakultService.getData();
    this.fakultService
      .observer
      .subscribe(fakult => {
        this.fakult = fakult;
      });
    if (!this.data.IdFakult) {
      this.data.IdFakult = this.fakult[0];
    }
  }

  onSaveClick(): void {
    this.kafedrService.save(this.data);
    this.onNoClick();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
