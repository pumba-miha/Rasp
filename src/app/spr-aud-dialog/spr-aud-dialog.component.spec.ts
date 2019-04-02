import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprAudDialogComponent } from './spr-aud-dialog.component';

describe('SprAudDialogComponent', () => {
  let component: SprAudDialogComponent;
  let fixture: ComponentFixture<SprAudDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprAudDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprAudDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
