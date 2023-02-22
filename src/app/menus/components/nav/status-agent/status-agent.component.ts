import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-status-agent',
  templateUrl: './status-agent.component.html',
  styleUrls: ['./status-agent.component.scss']
})
export class StatusAgentComponent {

  conectionState = true;

  @Output() state = new EventEmitter<boolean>();

  selectCheckbox(event: any){
    this.conectionState=event.target.checked;
    this.state.emit(this.conectionState);
  }

}
