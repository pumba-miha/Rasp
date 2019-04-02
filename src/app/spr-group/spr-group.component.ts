import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {GroupService} from '../../services/group.service';
import {Group} from '../../classes/group';
import {SprGroupDialogComponent} from '../spr-group-dialog/spr-group-dialog.component';

@Component({
  selector: 'app-spr-group',
  templateUrl: './spr-group.component.html',
  styleUrls: ['./spr-group.component.css']
})
export class SprGroupComponent implements OnInit {
  public selectedGroup: Group;
  private dataSource = new MatTableDataSource();
  private displayColumns: string[] = ['objectId', 'GroupName', 'Kurs', 'FakultName'];

  @ViewChild('filter') filter: ElementRef;

  constructor( private groupService: GroupService, public dialog: MatDialog ) {}

  async ngOnInit() {
    await this.getGroup();
  }

  private async getGroup() {
    this.dataSource.data = await this.groupService.getData();
    this.groupService
      .observer
      .subscribe(kaf => {
        this.dataSource.data = kaf;
      });
  }

  private onSelect(group: Group) {
    this.selectedGroup = group;
  }

  private applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  openDialog(group: Group): void {
    if (!group) { group = new Group(); }
    this.onSelect(group);
    const dialogRef = this.dialog.open(SprGroupDialogComponent, {
      width: '250px',
      data: this.selectedGroup
    });
  }
}
