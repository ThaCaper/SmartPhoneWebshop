import {Order} from './order';

export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  Name: string;
  email: string;
  phoneNumber: string;
  street: string;
  zipCode: string;
  country: string;
  orders?: Order[];
}
