import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Aud} from '../../classes/aud';
import {AudService} from '../../services/aud.service';

@Component({
  selector: 'app-spr-aud-dialog',
  templateUrl: './spr-aud-dialog.component.html',
  styleUrls: ['./spr-aud-dialog.component.css']
})
export class SprAudDialogComponent {

  constructor( public dialogRef: MatDialogRef<SprAudDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: Aud,
               private audService: AudService) {
  }

  onSaveClick(): void {
    this.audService.save(this.data);
    this.onNoClick();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
