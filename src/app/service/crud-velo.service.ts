import { Injectable } from '@angular/core';
import { Velo } from '../models/velo';
import { Reservation } from '../models/reservation';

import { catchError, map } from 'rxjs/operators';
import { Observable, throwError, Subject } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrudVeloService {

  // Node/Express API
  REST_API: string = 'http://localhost:8000/api/velo';
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }

  // Add
  AddVelo(data: Velo, id:any): Observable<any> {
    let API_URL = `${this.REST_API}/createVelo/${id}`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }
  AddReservationVelo(data: Reservation, id:any): Observable<any> {
    let API_URL = `${this.REST_API}/createReservationVelo/${id}`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }
  // Get all objects
  GetVelo() {
    return this.httpClient.get(`${this.REST_API}`);
    console.log(this.REST_API);
  }
  GetVelo_type() {
    return this.httpClient.get(`${this.REST_API}/VeloTypes`);
  }

  GetReservationType() {
    return this.httpClient.get(`${this.REST_API}/ReservationVelo`);
  }

  // Delete
  deleteVelo(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/api/deleteVeloById/${id}`;
    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
    
  }
  // Delete
  deleteReservationVelo(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/deleteReservationById/${id}`;
    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
    
  }
   // Update
   updateVelo(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/api/updateVelo/${id}`;
    return this.httpClient
      .put(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }
// Get single object
GetVeloOne(id: any): Observable<any> {
  let API_URL = `${this.REST_API}/api/searchVelo/${id}`;
  return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
    map((res: any) => {
      return res || {};
    }),
    catchError(this.handleError)
  );
}
SearchMarque(data: any): Observable<any> {
  let API_URL = `${this.REST_API}/searchVeloParMarque`;
  //alert(JSON.stringify(data))

  return this.httpClient.post(API_URL, data).pipe(
    map((res: any) => {
      return res || {};
    }),
    catchError(this.handleError)
  );
}
  // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      errorMessage;
    });
  }

}
