import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprFakultComponent } from './spr-fakult.component';

describe('SprFakultComponent', () => {
  let component: SprFakultComponent;
  let fixture: ComponentFixture<SprFakultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprFakultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprFakultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
