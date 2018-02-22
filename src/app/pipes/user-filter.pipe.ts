import { Pipe, PipeTransform } from '@angular/core';
import {TableDataService} from '../services/table-data.service';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {
 transform(users: any, args?: any,addition1?:any): any {
  console.log('------------------------args');
   console.log(args);
   if(!args) {
    return users;
  }
  if(!users) {
    return null;
  }
  let a = users.filter(user => 
    user['email'].toLowerCase().includes(args.toLowerCase()));
    return a;
    }
  }
