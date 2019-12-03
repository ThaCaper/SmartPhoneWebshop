import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../shared/models/user';
import {UserService} from '../../../shared/services/user.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  id: number;
  user: User;
  userForm = new FormGroup({
    id: new FormControl({value: '', disabled: true}),
    firstName: new FormControl({value: '', disabled: true}),
    lastName: new FormControl({value: '', disabled: true}),
    email: new FormControl({value: '', disabled: true}),
    phoneNumber: new FormControl({value: '', disabled: true}),
    street: new FormControl({value: '', disabled: true}),
    zipCode: new FormControl({value: '', disabled: true})
  });
  constructor(private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(this.id)
      .subscribe(userFromRest => {
        this.user = userFromRest;
        this.userForm.patchValue({
          id: userFromRest.id,
          firstName: userFromRest.firstName,
          lastName: userFromRest.lastName,
          email: userFromRest.email,
          phoneNumber: userFromRest.phoneNumber,
          street: userFromRest.street,
          zipCode: userFromRest.zipCode,
        });
      });
  }

}
