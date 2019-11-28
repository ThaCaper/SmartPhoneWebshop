import {SmartPhone} from './smartPhone';
import {Cover} from './cover';

export class OrderLine {
  productId?: number;
  smartPhone?: SmartPhone;
  cover?: Cover;
  orderId: number;
  qty: number;
  priceWhenBought: number;
}
