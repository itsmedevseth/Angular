import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Constants } from '../utils/Constanst';


@Pipe({
  name: 'dateformate'
})
export class DateformatePipe extends DatePipe implements PipeTransform  {

  override transform(value: any, args?:any): any {
    return super.transform(value, Constants.DATE_FMT);
  }

}
