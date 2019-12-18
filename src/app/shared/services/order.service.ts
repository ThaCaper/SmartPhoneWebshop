import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Order} from '../models/order';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiUrl = environment.apiUrl + '/orders';
  constructor(private http: HttpClient) { }

  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, order);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

  getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(this.apiUrl + '/' + id);
  }

  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(this.apiUrl + '/' + order.id, order);
  }

  deleteOrder(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + '/' + id);
  }
}

