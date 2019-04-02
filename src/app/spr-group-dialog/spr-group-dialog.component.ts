import {Component, Inject} from '@angular/core';
import {Fakult} from '../../classes/fakult';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FakultService} from '../../services/fakult.service';
import {GroupService} from '../../services/group.service';
import {Group} from '../../classes/group';

@Component({
  selector: 'app-spr-group-dialog',
  templateUrl: './spr-group-dialog.component.html',
  styleUrls: ['./spr-group-dialog.component.css']
})
export class SprGroupDialogComponent {
  private fakult: Fakult[] = [];

  constructor( public dialogRef: MatDialogRef<SprGroupDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: Group,
               private groupService: GroupService,
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
    this.groupService.save(this.data);
    this.onNoClick();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
