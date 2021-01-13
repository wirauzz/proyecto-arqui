import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { CustomerPageComponent } from './modules/pages/customer-page/customer-page.component';
import { CourierPageComponent } from './modules/pages/courier-page/courier-page.component';
import { CouriersComponent } from './modules/components/couriers/couriers.component';
import { CustomersComponent } from './modules/components/customers/customers.component';
import { AddCourierPageComponent } from './modules/pages/add-courier-page/add-courier-page.component';
import { AddCustomerPageComponent } from './modules/pages/add-customer-page/add-customer-page.component';
import { DeliveryManagmentPageComponent } from './modules/pages/delivery-managment-page/delivery-managment-page.component';
import { HomePageComponent } from './modules/pages/home-page/home-page.component';
import { EditCustomerPageComponent } from './modules/pages/edit-customer-page/edit-customer-page.component';
import { EditCourierPageComponent } from './modules/pages/edit-courier-page/edit-courier-page.component';
import { OrdersComponent } from './modules/components/orders/orders.component';
import { AddOrderPageComponent } from './modules/pages/add-order-page/add-order-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerPageComponent,
    CourierPageComponent,
    CouriersComponent,
    CustomersComponent,
    AddCourierPageComponent,
    AddCustomerPageComponent,
    DeliveryManagmentPageComponent,
    HomePageComponent,
    EditCustomerPageComponent,
    EditCourierPageComponent,
    OrdersComponent,
    AddOrderPageComponent
  ],
  imports: [
    HttpClientModule,
    AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
