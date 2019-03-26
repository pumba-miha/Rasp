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
    this.getKafedr();
  }

  private async getKafedr() {
    this.fakult = await this.fakultService.getData();
    this.kafedrService
      .observer
      .subscribe(fakult => {
        this.fakult = fakult;
      });
  }

  onSaveClick(): void {
    this.kafedrService.saveKafedr(this.data);
    this.onNoClick();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
