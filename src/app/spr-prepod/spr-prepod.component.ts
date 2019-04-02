import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PrepodService} from '../../services/prepod.service';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {Prepod} from '../../classes/prepod';
import {SprPrepodDialogComponent} from '../spr-prepod-dialog/spr-prepod-dialog.component';

@Component({
  selector: 'app-spr-prepod',
  templateUrl: './spr-prepod.component.html',
  styleUrls: ['./spr-prepod.component.css']
})
export class SprPrepodComponent implements OnInit {

  // private prepods: Prepod[] = [];
  public selectedPrepod: Prepod;
  private dataSource = new MatTableDataSource();
  private displayColumns: string[] = ['objectId', 'PrepodName', 'PrepodSecondName', 'PrepodMiddleName', 'KafedrName', 'IsActive'];

  constructor(private prepodService: PrepodService, public dialog: MatDialog) {}

  // @ViewChild('filter') filter: ElementRef;

  async ngOnInit() {
    await this.getPrepod();
  }

  private async getPrepod() {
    this.dataSource.data = await this.prepodService.getData();
    this.prepodService
      .observer
      .subscribe(prepod => {
        this.dataSource.data = prepod;
      });
  }

  private onSelect(prepod: Prepod) {
    this.selectedPrepod = prepod;
  }

  private applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    // filterValue = filterValue
    this.dataSource.filter = filterValue;
  }

  openDialog(prepod: Prepod): void {
    if (!prepod) { prepod = new Prepod(); }
    this.onSelect(prepod);
    const dialogRef = this.dialog.open(SprPrepodDialogComponent, {
      width: '250px',
      data: this.selectedPrepod
    });
  }
}

