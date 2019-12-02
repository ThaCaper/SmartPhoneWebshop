import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SmartphoneService} from '../../../shared/services/smartphone.service';
import {UserService} from '../../../shared/services/user.service';

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.css']
})
export class UsersUpdateComponent implements OnInit {

  id: number;
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    street: new FormControl(''),
    zipCode: new FormControl('')
  });
  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(this.id)
      .subscribe(userFromRest => {
        this.userForm.patchValue({
          firstName: userFromRest.firstName,
          lastName: userFromRest.lastName,
          phoneNumber: userFromRest.phoneNumber,
          street: userFromRest.street,
          zipCode: userFromRest.zipCode,
        });
      });
  }
  updateUser() {
    const user = this.userForm.value;
    user.id = this.id;
    this.userService.updateUser(user)
      .subscribe(() => {
        this.router.navigateByUrl('/users');
      });
  }

}
