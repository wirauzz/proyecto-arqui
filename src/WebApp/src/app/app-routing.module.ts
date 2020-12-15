import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerPageComponent } from './modules/pages/customer-page/customer-page.component';
import { CourierPageComponent } from './modules/pages/courier-page/courier-page.component';
import { AddCourierPageComponent } from './modules/pages/add-courier-page/add-courier-page.component';  
import { AddCustomerPageComponent } from './modules/pages/add-customer-page/add-customer-page.component';  

const routes: Routes = [
  {path: '', component: CustomerPageComponent},
  {path: 'couriers', component: CourierPageComponent},
  {path: 'couriers/new-courier', component: AddCourierPageComponent},
  {path: 'couriers/new-customer', component: AddCustomerPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
