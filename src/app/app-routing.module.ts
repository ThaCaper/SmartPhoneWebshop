import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersDetailsComponent} from './adminPage/users/users-details/users-details.component';
import {UsersListComponent} from './adminPage/users/users-list/users-list.component';
import {UsersAddComponent} from './adminPage/users/users-add/users-add.component';
import {UsersUpdateComponent} from './adminPage/users/users-update/users-update.component';
import {SmartPhonesUpdateComponent} from './adminPage/smartPhones/smart-phones-update/smart-phones-update.component';
import {SmartPhonesDetailsComponent} from './adminPage/smartPhones/smart-phones-details/smart-phones-details.component';
import {SmartPhonesListComponent} from './adminPage/smartPhones/smart-phones-list/smart-phones-list.component';
import {SmartPhonesAddComponent} from './adminPage/smartPhones/smart-phones-add/smart-phones-add.component';
import {CoversListComponent} from './adminPage/covers/covers-list/covers-list.component';
import {CoversDetailsComponent} from './adminPage/covers/covers-details/covers-details.component';
import {CoversUpdateComponent} from './adminPage/covers/covers-update/covers-update.component';
import {CoversAddComponent} from './adminPage/covers/covers-add/covers-add.component';
import {OrdersListComponent} from './adminPage/orders/orders-list/orders-list.component';
import {OrdersDetailsComponent} from './adminPage/orders/orders-details/orders-details.component';
import {OrdersUpdateComponent} from './adminPage/orders/orders-update/orders-update.component';
import {OrdersAddComponent} from './adminPage/orders/orders-add/orders-add.component';
import {HomeComponent} from './adminPage/home/home.component';
import {LoginComponent} from './shared/login/login.component';
import {AuthGuard} from './shared/guards/auth.guard';


const routes: Routes = [
  { path: 'users/:id', component: UsersDetailsComponent},
  { path: 'users', component: UsersListComponent},
  { path: 'user-add', component: UsersAddComponent},
  { path: 'user-update/:id', component: UsersUpdateComponent},
  { path: 'smartPhones-update/:id', component: SmartPhonesUpdateComponent},
  { path: 'smartPhones/:id', component: SmartPhonesDetailsComponent},
  { path: 'smartPhones', component: SmartPhonesListComponent},
  { path: 'smartPhones-add', component: SmartPhonesAddComponent},
  { path: 'covers', component: CoversListComponent},
  { path: 'covers/:id', component: CoversDetailsComponent},
  { path: 'cover-update/:id', component: CoversUpdateComponent},
  { path: 'cover-add', component: CoversAddComponent},
  { path: 'orders', component: OrdersListComponent},
  { path: 'orders/:id', component: OrdersDetailsComponent},
  { path: 'order-update/:id', component: OrdersUpdateComponent},
  { path: 'order-add', component: OrdersAddComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: '', component: LoginComponent, data: {title: 'login'}},
  { path: 'login', component: LoginComponent, data: { title: 'login'}},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
