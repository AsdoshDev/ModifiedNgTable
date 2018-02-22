import { Pipe, PipeTransform } from '@angular/core';
import {TableDataService} from '../services/table-data.service';


@Pipe({
  name: 'sortPipe',
  pure:false
})
export class SortPipePipe implements PipeTransform {

  transform(users: any, args?: any): any {
    if(!users || !args){
      return users;
    }
    users.sort();
    return users;

  }

}
