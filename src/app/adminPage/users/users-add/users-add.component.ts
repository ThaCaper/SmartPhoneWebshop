import { Component, OnInit } from '@angular/core';
import {SmartPhone} from '../../../shared/models/smartPhone';
import {FormControl, FormGroup} from '@angular/forms';
import {SmartphoneService} from '../../../shared/services/smartphone.service';
import {Router} from '@angular/router';
import {User} from '../../../shared/models/user';
import {UserService} from '../../../shared/services/user.service';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {

  user: User;
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    street: new FormControl(''),
    zipCode: new FormControl('')
  });
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  AddUser() {
    const userToBeAdded = this.userForm.value;
    this.userService.adduser(userToBeAdded)
      .subscribe(() => {
        this.router.navigateByUrl('/users');
      });
  }
}
