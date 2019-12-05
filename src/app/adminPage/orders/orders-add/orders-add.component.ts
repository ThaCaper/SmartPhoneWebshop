import { Component, OnInit } from '@angular/core';
import {Order} from '../../../shared/models/order';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-orders-add',
  templateUrl: './orders-add.component.html',
  styleUrls: ['./orders-add.component.css']
})
export class OrdersAddComponent implements OnInit {
 order: Order;
 orderForm = new FormGroup({
   productSelector: new FormControl(''),
   user: new FormControl('')
 });
  constructor() { }

  ngOnInit() {
  }

  save() {

  }
}
