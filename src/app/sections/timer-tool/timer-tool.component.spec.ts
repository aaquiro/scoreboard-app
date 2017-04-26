import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerToolComponent } from './timer-tool.component';

describe('TimerToolComponent', () => {
  let component: TimerToolComponent;
  let fixture: ComponentFixture<TimerToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
