import { state, style, transition, trigger,animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pause-selection',
  templateUrl: './pause-selection.component.html',
  styleUrls: ['./pause-selection.component.scss'],
  animations:[
    trigger('enterState',[
      state('void',style({
        transform:'translateY(-150%)',
        opacity:0
      })),
      transition(':enter',[
        animate(300,style({
          transform:'translateX(0)',
          opacity:1
        }))
      ])
    ])
  ]
})
export class PauseSelectionComponent {

}
