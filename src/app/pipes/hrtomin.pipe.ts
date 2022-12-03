import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs';

@Pipe({
  name: 'hrtomin'
})

//Hour to Minutes Converstion
export class HrtominPipe implements PipeTransform {

  transform(value: any): unknown {
    if (value != "Unknown") {
      const k = value.match(/^\d+|\d+\b|\d+(?=\w)/g);
      if (k.length == 2) {
        return Number(k[0] * 60) + Number(k[1]) + " min";
      } else if (k.length == 1) {
        return k[0] + " min/ep";
      }
    }
    return value;

  }

}
