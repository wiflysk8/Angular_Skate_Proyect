import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,arg: any): any {
    const resultSkaters = [];
    if(value){
    for (let skater of value){
      if(skater.name.toLowerCase().indexOf(arg) > -1){
        resultSkaters.push(skater);
      };
    };
  };
    return resultSkaters;
  }
}
