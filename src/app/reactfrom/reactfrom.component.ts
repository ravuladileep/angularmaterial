import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {MustMatch} from '../shared/must-match.validator';
import { EmpService } from '../shared/emp.service';



@Component({
  selector: 'app-reactfrom',
  templateUrl: './reactfrom.component.html',
  styleUrls: ['./reactfrom.component.css']
})
export class ReactfromComponent implements OnInit {
public registrationform: FormGroup;
public dileep = 'hiiii how are you';
  constructor(private fb: FormBuilder, private empservice: EmpService) { }


  get username() {
  return  this.registrationform.get('username');
  }
  get email() {
    return  this.registrationform.get('email');
  }
  get gender() {
    return  this.registrationform.get('gender');
  }
  get dateofbirth() {
    return  this.registrationform.get('dateofbirth');
  }
  get password() {
    return  this.registrationform.get('password');
  }
  get confirmpassword() {
    return  this.registrationform.get('confirmpassword');
  }

  ngOnInit() {
    this.registrationform = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      dateofbirth: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required]
    }, {
      validator : MustMatch('password', 'confirmpassword')
    });
  }
  onsubmit() {
    // console.log(this.registrationform.value);
    this.empservice.postuser(this.registrationform.value)
    .subscribe((res) => {
      console.log(res);
      console.log(`${this.dileep}`); // string interpolation in component
    });
  }
}
