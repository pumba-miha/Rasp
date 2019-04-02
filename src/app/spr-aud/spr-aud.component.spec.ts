import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprAudComponent } from './spr-aud.component';

describe('SprAudComponent', () => {
  let component: SprAudComponent;
  let fixture: ComponentFixture<SprAudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprAudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprAudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
