import {Component, ElementRef, Input, OnChanges, ViewEncapsulation} from '@angular/core';
import {UtilsHelper} from '@app/common/helpers/utils.helper';


@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SvgComponent implements OnChanges {

  @Input() size: string;
  @Input() name: string;
  @Input() color: string = 'primary';
  @Input() stroke: boolean = true;
  @Input() fill: boolean = false;
  @Input() bg_color: string;
  @Input() hover_bg_color: string;
  @Input() hover_color: string;

  old_hover_bg_color: string;
  old_hover_color: string;

  id: string;

  constructor(public elementRef: ElementRef) {
    this.id = 'wanna_' + UtilsHelper.guid();
    this.elementRef.nativeElement.classList.add(this.id);
  }


  ngOnChanges() {

    const new_icons = [
      'add-circle', 'trash', 'menu-v2', 'pencil', 'cancel-circle', 'select-arrow', 'telemarketer', 'bug',
      'menu-2', 'zoom-all', 'nodejs', 'file-code', 'broadcast', 'cards', 'format-text', 'image',
      'list', 'map-location', 'chat-bubbles', 'mail-letter', 'phone-dock', 'folder'
    ];

    const changes = {
      'list-reorder': 'menu-v2'
    };

    if (changes.hasOwnProperty(this.name)) {
      this.name = changes[this.name];
    }

    if (new_icons.indexOf(this.name) >= 0) {
      this.stroke = false;
      this.fill = true;
    }

    if (this.size) {
      let size = this.size;
      if (this.hover_bg_color || this.bg_color) {
        size = (parseFloat(this.size.replace('px', '')) + 8) + 'px';
      }
      this.elementRef.nativeElement.style.width = size;
      this.elementRef.nativeElement.style.height = size;
    }
    if (this.old_hover_bg_color) {
      this.elementRef.nativeElement.classList.remove(this.old_hover_bg_color);
    }
    if (this.old_hover_color) {
      this.elementRef.nativeElement.classList.remove(this.old_hover_color);
    }

    if (this.bg_color) {
      this.elementRef.nativeElement.classList.add('bg-color-' + this.bg_color);
    }

    if (this.hover_bg_color) {
      this.old_hover_bg_color = 'hover-bg-color-' + this.hover_bg_color;
      this.elementRef.nativeElement.classList.add(this.old_hover_bg_color);
    }
    if (this.hover_color) {
      this.old_hover_color = 'hover-color-' + this.hover_color;
      this.elementRef.nativeElement.classList.add(this.old_hover_color);
    }
    this.setCss();
  }

  colorIsAColor() {
    return this.color.indexOf('#') >= 0 || this.color.indexOf('rgb') >= 0;
  }

  setCss() {
    this.elementRef.nativeElement.classList.remove('has-color');
    if (this.colorIsAColor()) {
      this.elementRef.nativeElement.classList.add('has-color');
      let style = this.elementRef.nativeElement.querySelector('style');
      if (!style) {
        style = document.createElement('style');
        this.elementRef.nativeElement.appendChild(style);
      }
      let injectCss = '';
      if (this.stroke) {
        injectCss += '.' + this.id + ' svg-icon * { stroke: ' + this.color + '!important; }';
      }
      if (this.fill) {
        injectCss += '.' + this.id + ' svg-icon * { fill: ' + this.color + '!important; }';
      }
      style.innerHTML = injectCss;
    }
  }

}
