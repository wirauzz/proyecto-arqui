import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { CustomerPageComponent } from './modules/pages/customer-page/customer-page.component';
import { CourierPageComponent } from './modules/pages/courier-page/courier-page.component';
import { CourierItemComponent } from './modules/components/courier-item/courier-item.component';
import { CouriersComponent } from './modules/components/couriers/couriers.component';
import { CustomersComponent } from './modules/components/customers/customers.component';
import { CustomerItemComponent } from './modules/components/customer-item/customer-item.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerPageComponent,
    CourierPageComponent,
    CourierItemComponent,
    CouriersComponent,
    CustomersComponent,
    CustomerItemComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
