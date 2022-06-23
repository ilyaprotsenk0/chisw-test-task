import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mdfs',
})
export class MonthsDaysFromSecondsPipe implements PipeTransform {
  private msInSec = 1000;
  private dayInMs = 1000 * 60 * 60 * 24;

  transform(value: number, args?: any): string {
    let futureDateInMs = Date.now() + value * this.msInSec;
    let todayDateInMs = Date.now();

    let diff = futureDateInMs - todayDateInMs;
    let months = Math.floor(diff / this.dayInMs / 31);
    diff = diff - months * 31 * this.dayInMs;
    let days = Math.floor(diff / this.dayInMs);

    if (months > 0) {
      return `${months} month ${days} days`;
    }

    return `${days} days`;
  }
}
