import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {OrderLine} from '../../../shared/models/orderline';
import {Product} from '../../../shared/models/product';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-order-add-orderline',
  templateUrl: './order-add-orderline.component.html',
  styleUrls: ['./order-add-orderline.component.css']
})
export class OrderAddOrderlineComponent implements OnInit {
@Output() olOut = new EventEmitter<OrderLine>();
selectedProduct: Product;
amountForm = new FormGroup({
  count: new FormControl('')
});
  constructor() { }

  ngOnInit() {
    this.amountForm.patchValue({
      count: 1
    });
  }

  selectedProd(product: Product) {
    this.selectedProduct = product;
  }

  cancel() {
    this.olOut.emit(undefined);
  }

  addOrderLine() {
    const orderLine = new OrderLine();
    orderLine.product = this.selectedProduct;
    orderLine.qty = this.amountForm.value.count;
    orderLine.priceWhenBought = this.selectedProduct.price;
    orderLine.orderId = 0;
    this.olOut.emit(orderLine);
  }
}
