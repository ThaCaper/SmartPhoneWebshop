import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartphoneAddComponent } from './adminPage/smartPhones/smartphone-add/smartphone-add.component';
import { SmartphoneListComponent } from './adminPage/smartPhones/smartphone-list/smartphone-list.component';
import { SmartphoneUpdateComponent } from './adminPage/smartPhones/smartphone-update/smartphone-update.component';
import { SmartphoneDetailsComponent } from './adminPage/smartPhones/smartphone-details/smartphone-details.component';
import { CoversAddComponent } from './adminPage/covers/covers-add/covers-add.component';
import { CoversDetailsComponent } from './adminPage/covers/covers-details/covers-details.component';
import { CoversListComponent } from './adminPage/covers/covers-list/covers-list.component';
import { CoversUpdateComponent } from './adminPage/covers/covers-update/covers-update.component';
import { UsersAddComponent } from './adminPage/users/users-add/users-add.component';
import { UsersDetailsComponent } from './adminPage/users/users-details/users-details.component';
import { UsersUpdateComponent } from './adminPage/users/users-update/users-update.component';
import { UsersListComponent } from './adminPage/users/users-list/users-list.component';
import { OrdersComponent } from './adminPage/orders/orders.component';
import { OrdersAddComponent } from './adminPage/orders/orders-add/orders-add.component';
import { OrdersDetailsComponent } from './adminPage/orders/orders-details/orders-details.component';
import { OrdersListComponent } from './adminPage/orders/orders-list/orders-list.component';
import { OrdersUpdateComponent } from './adminPage/orders/orders-update/orders-update.component';
import { HomeComponent } from './adminPage/home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartphoneAddComponent,
    SmartphoneListComponent,
    SmartphoneUpdateComponent,
    SmartphoneDetailsComponent,
    CoversAddComponent,
    CoversDetailsComponent,
    CoversListComponent,
    CoversUpdateComponent,
    UsersAddComponent,
    UsersDetailsComponent,
    UsersUpdateComponent,
    UsersListComponent,
    OrdersComponent,
    OrdersAddComponent,
    OrdersDetailsComponent,
    OrdersListComponent,
    OrdersUpdateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
