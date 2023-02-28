import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }
    value = value.replace(/\s+/g, "_").trim();
    return value;
  }

}
