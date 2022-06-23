import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ttc',
})
export class ThousandsThoughtCommaPipe implements PipeTransform {
  transform(value: number, args?: any): string {
    if (value < 1000) {
      return String(value);
    }

    return String(value / 1000).replace('.', ',');
  }
}
