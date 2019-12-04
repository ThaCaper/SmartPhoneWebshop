import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string ): Observable<boolean> {
    return this.http.post<any>(environment.apiUrl + '/token', { username, password })
      .pipe(map(response => {
        const token = response.token;
        if (token) {
          localStorage.setItems('currentUser', JSON.stringify({ username: username, token: token}));
          return true;
        } else {
          return false;
        }

      }));
  }

  getToken(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      return currentUser.token;
    } else {
      return null;
    }
  }

  getUsername(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      return currentUser.username;
    } else {
      return null;
    }
  }

  Logout(): void {
   localStorage.removeItem('currentUser');
   this.router.navigate(['login']);
  }


}
