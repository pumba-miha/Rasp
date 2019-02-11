import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprKafedrComponent } from './spr-kafedr.component';

describe('SprKafedrComponent', () => {
  let component: SprKafedrComponent;
  let fixture: ComponentFixture<SprKafedrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprKafedrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprKafedrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
