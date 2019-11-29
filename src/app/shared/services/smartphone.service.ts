import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SmartPhone} from '../models/smartPhone';

@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {
sp: SmartPhone[];
apiUrl = 'http://smartphoneshop.azurewebsites.net/api/smartPhones';
  constructor(private http: HttpClient) { }

  addSmartPhone(smart: SmartPhone): Observable<SmartPhone> {
    return this.http.post<SmartPhone>(this.apiUrl, smart);
  }
  getSmartPhones(): Observable<SmartPhone[]> {
    return this.http.get<SmartPhone[]>(this.apiUrl);
  }
  getSmartPhoneById(id: number): Observable<SmartPhone> {
    return this.http.get<SmartPhone>(this.apiUrl + '/' + id);
  }
  updateSmartPhone(smart: SmartPhone): Observable<SmartPhone> {
    return this.http.put<SmartPhone>(this.apiUrl + '/' + smart.id, smart);
  }
  deleteSmartPhone(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
