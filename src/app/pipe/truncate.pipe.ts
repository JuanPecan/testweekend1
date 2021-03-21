import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value:string, limit:50, ellipse="..." ): unknown {
    if(limit == null){    /// attention double égal
      return `vous n'avez pas de texte`
    }
    return value.length <= limit ? value : `${value.substr(0, limit)}${ellipse}`;
  }

}
