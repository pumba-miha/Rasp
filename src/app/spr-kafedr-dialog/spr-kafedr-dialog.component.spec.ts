import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprKafedrDialogComponent } from './spr-kafedr-dialog.component';

describe('SprKafedrDialogComponent', () => {
  let component: SprKafedrDialogComponent;
  let fixture: ComponentFixture<SprKafedrDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprKafedrDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprKafedrDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
