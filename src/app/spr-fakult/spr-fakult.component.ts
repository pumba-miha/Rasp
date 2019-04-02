import { Component, OnInit } from '@angular/core';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {Fakult} from '../../classes/fakult';
import {FakultService} from '../../services/fakult.service';
import {SprFakultDialogComponent} from '../spr-fakult-dialog/spr-fakult-dialog.component';

@Component({
  selector: 'app-spr-fakult',
  templateUrl: './spr-fakult.component.html',
  styleUrls: ['./spr-fakult.component.css']
})
export class SprFakultComponent implements OnInit {
  public selectedFakult: Fakult;
  private dataSource = new MatTableDataSource();
  private displayColumns: string[] = ['objectId', 'FakultName'];
  constructor(private fakultService: FakultService, public dialog: MatDialog) { }

  async ngOnInit() {
    await this.getFakult();
  }

  private async getFakult() {
    this.dataSource.data = await this.fakultService.getData();
    this.fakultService
      .observer
      .subscribe(fak => {
        this.dataSource.data = fak;
      });
  }

  private onSelect(fakult: Fakult) {
    this.selectedFakult = fakult;
  }

  private applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  openDialog(fakult: Fakult): void {
    if (!fakult) { fakult = new Fakult(); }
    this.onSelect(fakult);
    const dialogRef = this.dialog.open(SprFakultDialogComponent, {
      width: '250px',
      data: this.selectedFakult
    });
  }
}
