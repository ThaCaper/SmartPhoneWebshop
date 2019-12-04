import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = environment.apiUrl + '/users';
  constructor(private http: HttpClient) { }

  adduser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.apiUrl + '/' + id);
  }
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.apiUrl + '/' + user.id, user);
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
