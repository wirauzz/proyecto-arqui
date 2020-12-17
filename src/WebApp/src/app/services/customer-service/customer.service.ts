import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  customerUrl: string = 'http://localhost:3000/api/v1/clients';

  constructor(private http: HttpClient) { }
  
  getCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.customerUrl}`);
  }

  getCustomer(idCustomer:string): Observable<Customer>{
    return this.http.get<Customer>(`${this.customerUrl}/${idCustomer}`);
  }

  addCustomer(newCustomer: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.customerUrl, newCustomer, httpOptions);
  }

  edtiCustomer(customer: Customer):Observable<Customer> {
    return this.http.put<Customer>(`${this.customerUrl}/${customer._id}`,customer,httpOptions);
  }

  removeCustomer(CustomerId: Number) {
    return this.http.delete(`${this.customerUrl}/${CustomerId}`,httpOptions);
  }


}
