import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'find'
})
export class FindPipe implements PipeTransform {

 
  transform(items: any[], term: string): any {
    return items.filter(item => item.date.indexOf(term) !== -1);
  }

}
