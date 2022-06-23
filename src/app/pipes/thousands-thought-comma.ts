import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ttc',
})
export class ThousandsThoughtCommaPipe implements PipeTransform {
  transform(value: number, args?: any): string {
    return String(value / 1000).replace('.', ',');
  }
}
