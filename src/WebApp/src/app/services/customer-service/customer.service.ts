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

  customerUrl: string = 'http://localhost:50000/api/Customers';

  constructor(private http: HttpClient) { }
  
  getCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.customerUrl}`,httpOptions);
  }

  getCustomer(idCustomer:string): Observable<Customer>{
    return this.http.get<Customer>(`${this.customerUrl}/${idCustomer}`);
  }

  addCustomer(newCustomer: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.customerUrl, newCustomer, httpOptions);
  }

  edtiCustomer(couerier: Customer):Observable<Customer> {
    return this.http.put<Customer>(`${this.customerUrl}/${couerier.id}`,couerier,httpOptions);
  }

  removeCustomer(CustomerId: Number) {
    return this.http.delete(`${this.customerUrl}/${CustomerId}`,httpOptions);
  }


}
