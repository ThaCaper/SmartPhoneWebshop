import {OrderLine} from './orderline';
import {User} from './user';

export class Order {
  id: number;
  deliveryDate?: Date;
  orderDate?: Date;
  user?: User;
  orderLines?: OrderLine[];
}
