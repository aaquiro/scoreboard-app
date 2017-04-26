import { NgModule } from '@angular/core';
import { TimerToolComponent } from './timer-tool/timer-tool.component';
import { ScoreToolComponent } from './score-tool/score-tool.component';
import { ShotclockToolComponent } from './shotclock-tool/shotclock-tool.component'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports:[
        NgbModule,
        
    ],
  declarations: [
      TimerToolComponent,
      ScoreToolComponent,
      ShotclockToolComponent,
      ],
      exports:[
        TimerToolComponent,
        ScoreToolComponent,
        ShotclockToolComponent,
      ]
})
export class SectionsModule { }