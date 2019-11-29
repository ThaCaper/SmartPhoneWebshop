import {SmartPhone} from './smartPhone';
import {Cover} from './cover';
import {Product} from './product';
import {Order} from './order';

export class OrderLine {
  productId?: number;
  product: Product
  orderId: number;
  order: Order;
  qty: number;
  priceWhenBought: number;
}
