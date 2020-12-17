import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerPageComponent } from './modules/pages/customer-page/customer-page.component';
import { CourierPageComponent } from './modules/pages/courier-page/courier-page.component';
import { AddCourierPageComponent } from './modules/pages/add-courier-page/add-courier-page.component';  
import { AddCustomerPageComponent } from './modules/pages/add-customer-page/add-customer-page.component';  
import { DeliveryManagmentPageComponent } from './modules/pages/delivery-managment-page/delivery-managment-page.component';
import { HomePageComponent} from './modules/pages/home-page/home-page.component';
const routes: Routes = [
  {path: 'clientes', component: CustomerPageComponent},
  {path: 'repartidores', component: CourierPageComponent},
  {path: 'repartidores/agregar', component: AddCourierPageComponent},
  {path: 'clientes/agregar', component: AddCustomerPageComponent},
  {path: 'administrar_pedidos', component: DeliveryManagmentPageComponent},
  {path: '', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
