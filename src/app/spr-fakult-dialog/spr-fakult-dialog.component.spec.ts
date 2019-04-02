import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprFakultDialogComponent } from './spr-fakult-dialog.component';

describe('SprFakultDialogComponent', () => {
  let component: SprFakultDialogComponent;
  let fixture: ComponentFixture<SprFakultDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprFakultDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprFakultDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
