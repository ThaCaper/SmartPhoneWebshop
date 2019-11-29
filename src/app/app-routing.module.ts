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


const routes: Routes = [
  { path: 'users/:id', component: UsersDetailsComponent},
  { path: 'users', component: UsersListComponent},
  { path: 'user-add', component: UsersAddComponent},
  { path: 'user-update/:id', component: UsersUpdateComponent},
  { path: 'smartPhones-update/:id', component: SmartPhonesUpdateComponent},
  { path: 'smartPhones/:id', component: SmartPhonesDetailsComponent},
  { path: 'smartPhones', component: SmartPhonesListComponent},
  { path: 'smartPhones-add', component: SmartPhonesAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
