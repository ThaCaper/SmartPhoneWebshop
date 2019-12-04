import {Order} from './order';

export class User {
  id: number;
  Username: string;
  Password: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  street: string;
  zipCode: string;
  country: string;
  orders?: Order[];
}
