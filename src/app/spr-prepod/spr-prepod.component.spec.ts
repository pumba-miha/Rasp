import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprPrepodComponent } from './spr-prepod.component';

describe('SprPrepodComponent', () => {
  let component: SprPrepodComponent;
  let fixture: ComponentFixture<SprPrepodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprPrepodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprPrepodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
