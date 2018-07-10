import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure : false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredStatus: any, status : any) {
    if(value.length == 0 ||  filteredStatus == ""){
      return value;
    }
    let resultArray = [];
    for(let todo of value){
      console.log(todo);
      if(todo[status] == filteredStatus){
        resultArray.push(todo);
      }
    }
    return resultArray;
  }

}
