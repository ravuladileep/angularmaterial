import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'userfilter'
})
export class UserFilterPipe implements PipeTransform {
  transform(users: any[], searchterm: string): any[] {
    if (!users || !searchterm) {
      return users;
    }
    return users.filter(user =>
      user.employee_name.toLowerCase().indexOf(searchterm.toLocaleLowerCase()) !== -1);
  }
}
