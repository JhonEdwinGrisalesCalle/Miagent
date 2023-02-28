import { Component, Output , EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent {

  selectedId: string='';
  @Output() section_title = new EventEmitter<string>();

  setSelected(id: string) {
    this.selectedId = id;
      this.section_title.emit("vertical_navegation." + id);
  }
}
