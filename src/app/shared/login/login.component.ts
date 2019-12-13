import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../models/user';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  submitted = false;
  loading = false;
  errormsg = '';
  constructor(private formBuilder: FormBuilder, private router: Router, private authentication: AuthenticationService) {}

  user: User;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });



    this.authentication.Logout();
  }
  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }
  Login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.authentication.login(this.username.value, this.password.value)
      .subscribe(success => {
        this.router.navigate(['/home']);
      }, error => {
        this.errormsg = error.message;
        this.loading = false;
      });
  }
}
