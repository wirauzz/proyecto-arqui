import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerPageComponent } from './modules/pages/customer-page/customer-page.component';
import { CourierPageComponent } from './modules/pages/courier-page/courier-page.component';
import { AddCourierPageComponent } from './modules/pages/add-courier-page/add-courier-page.component';  
import { AddCustomerPageComponent } from './modules/pages/add-customer-page/add-customer-page.component';  
import { DeliveryManagmentPageComponent } from './modules/pages/delivery-managment-page/delivery-managment-page.component';
import { HomePageComponent } from './modules/pages/home-page/home-page.component';
import { EditCustomerPageComponent } from './modules/pages/edit-customer-page/edit-customer-page.component';
import { EditCourierPageComponent } from './modules/pages/edit-courier-page/edit-courier-page.component';
import { CustomerAddOrderComponent } from './modules/pages/customer-add-order/customer-add-order.component';
import { CustomerInfoComponent } from './modules/pages/customer-info/customer-info.component';
import { CourierInfoComponent } from './modules/pages/courier-info/courier-info.component';
import { EditOrderPageComponent } from './modules/pages/edit-order-page/edit-order-page.component';

const routes: Routes = [
  {path: 'clientes', component: CustomerPageComponent},
  {path: 'repartidores', component: CourierPageComponent},
  {path: 'repartidores/agregar', component: AddCourierPageComponent},
  {path: 'clientes/agregar', component: AddCustomerPageComponent},
  {path: 'pedidos', component: DeliveryManagmentPageComponent},
  {path: '', component: HomePageComponent},
  {path: 'clientes/editar/:customerId', component: EditCustomerPageComponent},
  {path: 'repartidores/editar/:courierId', component: EditCourierPageComponent},
  {path: 'clientes/:customerId/nuevo-pedido', component: CustomerAddOrderComponent},
  {path: 'clientes/:customerId', component: CustomerInfoComponent},
  {path: 'repartidores/:courierId', component: CourierInfoComponent},
  {path: 'pedidos/:orderId/editar', component: EditOrderPageComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
