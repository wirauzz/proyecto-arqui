import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Courier } from 'src/app/models/courier';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})

export class CourierService {
  courierUrl: string = 'http://localhost:50000/api/couriers';

  constructor(private http: HttpClient) { }
  
  getCouriers(): Observable<Courier[]>{
    return this.http.get<Courier[]>(`${this.courierUrl}`,httpOptions);
  }

  getCourier(idCourier:string): Observable<Courier>{
    return this.http.get<Courier>(`${this.courierUrl}/${idCourier}`);
  }

  addCourier(newCourier: Courier): Observable<Courier>{
    return this.http.post<Courier>(this.courierUrl, newCourier, httpOptions);
  }

  edtiCourier(couerier: Courier):Observable<Courier> {
    return this.http.put<Courier>(`${this.courierUrl}/${couerier.id}`,couerier,httpOptions);
  }

  removeCourier(courierId: Number) {
    return this.http.delete(`${this.courierUrl}/${courierId}`,httpOptions);
  }


}
