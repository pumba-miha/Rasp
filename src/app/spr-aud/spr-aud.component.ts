import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {Aud} from '../../classes/aud';
import {AudService} from '../../services/aud.service';
import {SprAudDialogComponent} from '../spr-aud-dialog/spr-aud-dialog.component';

@Component({
  selector: 'app-spr-aud',
  templateUrl: './spr-aud.component.html',
  styleUrls: ['./spr-aud.component.css']
})
export class SprAudComponent implements OnInit {
  public selectedAud: Aud;
  private dataSource = new MatTableDataSource();
  private displayColumns: string[] = ['objectId', 'AudName', 'Capacity'];

  @ViewChild('filter') filter: ElementRef;

  constructor( private audService: AudService, public dialog: MatDialog ) {}

  async ngOnInit() {
    await this.getAud();
  }

  private async getAud() {
    this.dataSource.data = await this.audService.getData();
    this.audService
      .observer
      .subscribe(aud => {
        this.dataSource.data = aud;
      });
  }

  private onSelect(aud: Aud) {
    this.selectedAud = aud;
  }

  private applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  openDialog(aud: Aud): void {
    if (!aud) { aud = new Aud(); }
    this.onSelect(aud);
    const dialogRef = this.dialog.open(SprAudDialogComponent, {
      width: '250px',
      data: this.selectedAud
    });
  }
}
