import { Component, OnInit } from '@angular/core';
import { EmpService } from '../shared/emp.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private user: EmpService) { }
  public users = [];
  p = 1;
  count = 5;
  public error;
  public searchterm: string;

  ngOnInit() {
    this.user.getusers()
    .subscribe((data) => {
      this.users = data;
    }, (error) => {
      this.error = error;
      });
  }

}
