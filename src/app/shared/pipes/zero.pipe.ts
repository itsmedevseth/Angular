import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from '../utils/Constanst';

@Pipe({
  name: 'zero'
})
export class ZeroPipe extends Constants implements PipeTransform {


  transform(value: number): any {
    if(value === 0) {
      return ;
    }else {
    return ( Constants.ONENUM +value);
    }
  }
}
