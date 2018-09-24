import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprPrepodDialogComponent } from './spr-prepod-dialog.component';

describe('SprPrepodDialogComponent', () => {
  let component: SprPrepodDialogComponent;
  let fixture: ComponentFixture<SprPrepodDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprPrepodDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprPrepodDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
