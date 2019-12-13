import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../shared/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }
  logout() {
  this.authenticationService.Logout();
}
}
