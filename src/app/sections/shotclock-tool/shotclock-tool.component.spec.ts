import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotclockToolComponent } from './shotclock-tool.component';

describe('ShotclockToolComponent', () => {
  let component: ShotclockToolComponent;
  let fixture: ComponentFixture<ShotclockToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShotclockToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShotclockToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
