import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from '../utils/Constanst';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe extends Constants implements PipeTransform {

  transform(value: number): any {
    return (Constants.CURRENCY_DOLAR + value );
  }
}
