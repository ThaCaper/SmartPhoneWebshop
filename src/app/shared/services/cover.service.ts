import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {SmartPhone} from '../models/smartPhone';
import {Observable} from 'rxjs';
import {Cover} from '../models/cover';
import {AuthenticationService} from './authentication.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CoverService {
  apiUrl = environment.apiUrl + '/covers';
  constructor(private http: HttpClient , private authenticationService: AuthenticationService) { }

  addCover(cover: Cover): Observable<Cover> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.post<Cover>(this.apiUrl, cover, httpOptions);
  }
  getCovers(): Observable<Cover[]> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<Cover[]>(this.apiUrl, httpOptions);
  }
  getCoverById(id: number): Observable<Cover> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<Cover>(this.apiUrl + '/' + id, httpOptions);
  }
  updateCover(cover: Cover): Observable<Cover> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.put<Cover>(this.apiUrl + '/' + cover.id, cover, httpOptions);
  }
  deleteCover(id: number): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.delete(this.apiUrl + '/' + id, httpOptions);
  }
}
