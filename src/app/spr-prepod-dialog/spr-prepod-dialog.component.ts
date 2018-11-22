import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Prepod} from '../../classes/prepod';
import {KafedrService} from '../../services/kafedr.service';
import {Kafedr} from '../../classes/kafedr';
import {PrepodService} from '../../services/prepod.service';

@Component({
  selector: 'app-spr-prepod-dialog',
  templateUrl: './spr-prepod-dialog.component.html',
  styleUrls: ['./spr-prepod-dialog.component.css']
})
export class SprPrepodDialogComponent {

  private kafedr: Kafedr[] = [];

  constructor(
    public dialogRef: MatDialogRef<SprPrepodDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Prepod,
    private kafedrService: KafedrService,
    private prepodService: PrepodService
  ) {
    this.getKafedr();
  }

  private getKafedr() {
    this.kafedrService
      .asObservable()
      .subscribe(kaf => {
        this.kafedr = kaf;
      });
  }

  onSaveClick(): void {
    this.prepodService.savePrepod(this.data);
    this.onNoClick();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
