import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimCreditCard'
})
export class TrimCreditCardPipe implements PipeTransform {
  transform(value: string, args?: string): any {
    const value1 = value.substring(0, 3);
    const value2 = value.substring(13, 16);
    let value3 = '';
    for (let i = 0; i < 10; i++) {
      value3 += args;
    }
    return value1 + value3 + value2;
  }
}
