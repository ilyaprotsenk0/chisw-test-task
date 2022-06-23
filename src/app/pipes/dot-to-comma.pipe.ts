import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dtc',
})
export class DotToCommaPipe implements PipeTransform {
  transform(value: number, args?: any): string {
    return String(value).replace('.', ',');
  }
}
