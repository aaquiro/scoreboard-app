import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreToolComponent } from './score-tool.component';

describe('ScoreToolComponent', () => {
  let component: ScoreToolComponent;
  let fixture: ComponentFixture<ScoreToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
