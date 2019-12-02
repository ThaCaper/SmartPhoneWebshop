import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {SmartPhone} from '../models/smartPhone';
import {Observable} from 'rxjs';
import {Cover} from '../models/cover';

@Injectable({
  providedIn: 'root'
})
export class CoverService {
  apiUrl = environment.apiUrl + '/covers';
  constructor(private http: HttpClient) { }

  addCover(cover: Cover): Observable<Cover> {
    return this.http.post<Cover>(this.apiUrl, cover);
  }
  getCovers(): Observable<Cover[]> {
    return this.http.get<Cover[]>(this.apiUrl);
  }
  getCoverById(id: number): Observable<Cover> {
    return this.http.get<Cover>(this.apiUrl + '/' + id);
  }
  updateCover(cover: Cover): Observable<Cover> {
    return this.http.put<Cover>(this.apiUrl + '/' + cover.id, cover);
  }
  deleteCover(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
