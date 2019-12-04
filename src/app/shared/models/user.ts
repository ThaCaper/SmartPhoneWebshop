import {Order} from './order';

export class User {
  id: number;
  userName: string;
  password?: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  street: string;
  zipCode: string;
  country: string;
  orders?: Order[];
}
