import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberShortener',
  pure: true,
})
export class NumberShortenerPipe implements PipeTransform {
  transform(input: number, args?: any): string | number | null {
    const exp = Math.floor(Math.log(input) / Math.log(1000));
    const suffixes = ['K', 'M'];

    if (Number.isNaN(input)) {
      return null;
    }

    if (Math.abs(input) < 1000) {
      return input;
    }

    return (input / Math.pow(1000, exp)).toFixed(args) + suffixes[exp - 1];
  }
}
