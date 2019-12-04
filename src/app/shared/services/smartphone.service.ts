import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SmartPhone} from '../models/smartPhone';
import {environment} from '../../../environments/environment';
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
export class SmartphoneService {
apiUrl = environment.apiUrl + '/smartPhones';
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  addSmartPhone(smart: SmartPhone): Observable<SmartPhone> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.post<SmartPhone>(this.apiUrl, smart, httpOptions);
  }
  getSmartPhones(): Observable<SmartPhone[]> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<SmartPhone[]>(this.apiUrl, httpOptions);
  }
  getSmartPhoneById(id: number): Observable<SmartPhone> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<SmartPhone>(this.apiUrl + '/' + id, httpOptions);
  }
  updateSmartPhone(smart: SmartPhone): Observable<SmartPhone> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.put<SmartPhone>(this.apiUrl + '/' + smart.id, smart, httpOptions);
  }
  deleteSmartPhone(id: number): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.delete(this.apiUrl + '/' + id, httpOptions);
  }
}
