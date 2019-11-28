import {Address} from './address';
import {Order} from './order';

export class User {
  id: number;
  userName: string;
  password?: string;
  firstName: string;
  lastName: string;
  address: Address;
  email: string;
  phoneNumber: string;
  orders?: Order[];
}
