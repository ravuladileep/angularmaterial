import { Component, OnInit } from '@angular/core';
import { EmpService } from '../shared/emp.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private users: EmpService,
              private activatedroute: ActivatedRoute,
              private router: Router) { }
  public user = '';
  ngOnInit() {
   const id: number = this.activatedroute.snapshot.params.id;
   this.users.getuser(id).subscribe((data) => {this.user = data; },
                                    (error) => {console.log(error); });
  }
  backtousers() {
    this.router.navigate(['users']);
  }
}
