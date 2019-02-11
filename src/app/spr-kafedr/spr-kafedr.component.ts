import { Component, OnInit } from '@angular/core';
import {Kafedr} from '../../classes/kafedr';
import {KafedrService} from '../../services/kafedr.service';
import {MatDialog, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-spr-kafedr',
  templateUrl: './spr-kafedr.component.html',
  styleUrls: ['./spr-kafedr.component.css']
})
export class SprKafedrComponent implements OnInit {
  public selectedKaf: Kafedr;
  private dataSource = new MatTableDataSource();
  private displayColumns: string[] = ['objectId', 'KafedrName'];

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
}
