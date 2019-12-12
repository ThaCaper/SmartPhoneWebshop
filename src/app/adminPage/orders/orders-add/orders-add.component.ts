import { Component, OnInit } from '@angular/core';
import {Order} from '../../../shared/models/order';
import {FormControl, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {OrderService} from '../../../shared/services/order.service';
import {CoverService} from '../../../shared/services/cover.service';
import {SmartphoneService} from '../../../shared/services/smartphone.service';
import {Cover} from '../../../shared/models/cover';
import {SmartPhone} from '../../../shared/models/smartPhone';

@Component({
  selector: 'app-orders-add',
  templateUrl: './orders-add.component.html',
  styleUrls: ['./orders-add.component.css']
})
export class OrdersAddComponent implements OnInit {
  covers: Cover[];
  phones: SmartPhone[];
  orders: Order[];
  loading = true;
  orderForm = new FormGroup({
    productSelector: new FormControl(''),
    user: new FormControl('')
  });

  constructor(private snackBar: MatSnackBar,
              private orderService: OrderService,
              private coverService: CoverService,
              private smartPhoneService: SmartphoneService) {
  }

  ngOnInit() {
    this.coverService.getCovers()
      .subscribe(covers => {
        this.covers = covers;
        this.loading = false;
      });
    this.smartPhoneService.getSmartPhones()
      .subscribe(phones => {
        this.phones = phones;
        this.loading = false;
      });
  }

 save() {
 }
}
