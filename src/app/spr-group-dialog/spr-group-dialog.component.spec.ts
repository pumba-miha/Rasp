import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprGroupDialogComponent } from './spr-group-dialog.component';

describe('SprGroupDialogComponent', () => {
  let component: SprGroupDialogComponent;
  let fixture: ComponentFixture<SprGroupDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprGroupDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprGroupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
