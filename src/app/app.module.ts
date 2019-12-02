import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoversAddComponent } from './adminPage/covers/covers-add/covers-add.component';
import { CoversDetailsComponent } from './adminPage/covers/covers-details/covers-details.component';
import { CoversListComponent } from './adminPage/covers/covers-list/covers-list.component';
import { CoversUpdateComponent } from './adminPage/covers/covers-update/covers-update.component';
import { UsersAddComponent } from './adminPage/users/users-add/users-add.component';
import { UsersDetailsComponent } from './adminPage/users/users-details/users-details.component';
import { UsersUpdateComponent } from './adminPage/users/users-update/users-update.component';
import { UsersListComponent } from './adminPage/users/users-list/users-list.component';
import { OrdersAddComponent } from './adminPage/orders/orders-add/orders-add.component';
import { OrdersDetailsComponent } from './adminPage/orders/orders-details/orders-details.component';
import { OrdersListComponent } from './adminPage/orders/orders-list/orders-list.component';
import { OrdersUpdateComponent } from './adminPage/orders/orders-update/orders-update.component';
import { HomeComponent } from './adminPage/home/home.component';
import { SmartPhonesAddComponent } from './adminPage/smartPhones/smart-phones-add/smart-phones-add.component';
import { SmartPhonesUpdateComponent } from './adminPage/smartPhones/smart-phones-update/smart-phones-update.component';
import { SmartPhonesListComponent } from './adminPage/smartPhones/smart-phones-list/smart-phones-list.component';
import { SmartPhonesDetailsComponent } from './adminPage/smartPhones/smart-phones-details/smart-phones-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatButtonToggleModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CoversAddComponent,
    CoversDetailsComponent,
    CoversListComponent,
    CoversUpdateComponent,
    UsersAddComponent,
    UsersDetailsComponent,
    UsersUpdateComponent,
    UsersListComponent,
    OrdersAddComponent,
    OrdersDetailsComponent,
    OrdersListComponent,
    OrdersUpdateComponent,
    HomeComponent,
    SmartPhonesAddComponent,
    SmartPhonesUpdateComponent,
    SmartPhonesListComponent,
    SmartPhonesDetailsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
