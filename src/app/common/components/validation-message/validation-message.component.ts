import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.scss']
})
export class ValidationMessageComponent {

  @Input() field: any;
  @Input() messages: Array<any>;


  constructor(
    public elementRef: ElementRef,
  ) {}

}

