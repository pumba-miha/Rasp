import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprGroupComponent } from './spr-group.component';

describe('SprGroupComponent', () => {
  let component: SprGroupComponent;
  let fixture: ComponentFixture<SprGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
