import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Kafedr} from '../../classes/kafedr';
import {KafedrService} from '../../services/kafedr.service';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {SprKafedrDialogComponent} from '../spr-kafedr-dialog/spr-kafedr-dialog.component';

@Component({
  selector: 'app-spr-kafedr',
  templateUrl: './spr-kafedr.component.html',
  styleUrls: ['./spr-kafedr.component.css']
})
export class SprKafedrComponent implements OnInit {
  public selectedKaf: Kafedr;
  private dataSource = new MatTableDataSource();
  private displayColumns: string[] = ['objectId', 'KafedrName', 'FakultName'];

  @ViewChild('filter') filter: ElementRef;

  constructor( private kafedrService: KafedrService, public dialog: MatDialog ) {}

  async ngOnInit() {
    await this.getKafedr();
  }

  private async getKafedr() {
    this.dataSource.data = await this.kafedrService.getData();
    this.kafedrService
      .observer
      .subscribe(kaf => {
        this.dataSource.data = kaf;
      });
  }

  private onSelect(kafedr: Kafedr) {
    this.selectedKaf = kafedr;
  }

  private applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  openDialog(kafedr: Kafedr): void {
    if (!kafedr) { kafedr = new Kafedr(); }
    this.onSelect(kafedr);
    const dialogRef = this.dialog.open(SprKafedrDialogComponent, {
      width: '250px',
      data: this.selectedKaf
    });
  }
}
