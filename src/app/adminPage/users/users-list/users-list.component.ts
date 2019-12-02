import { Component, OnInit } from '@angular/core';
import {User} from '../../../shared/models/user';
import {UserService} from '../../../shared/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  theUser: User[];
  loading: boolean;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(user => {
        this.theUser = user;
      });
  }



  refresh() {
    this.loading = true;
    this.userService.getUsers().subscribe(user => {
      this.theUser = user;
    });
  }



  delete(id: number) {
    this.userService.deleteUser(id)
      .subscribe(message => {
        this.refresh();
      });
  }

}
