import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrudReservationService {

  // Node/Express API
  REST_API: string = 'http://localhost:8000/api/reservation';
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }

  // Add
  AddReservation(data: Reservation, id:any): Observable<any> {
    let API_URL = `${this.REST_API}/api/createVelo/${id}`;
    
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }
  // Get all objects
  GetReservation() {
    return this.httpClient.get(`${this.REST_API}`);
  }

  GetVelo() {
    return this.httpClient.get(`${this.REST_API}/velo`);
  }

   // Get single object
   GetReservationOne(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/searchReservation/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Delete
  deleteReservation(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/api/deleteReservationById/${id}`;
    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
    
  }
   // Update
   updateReservation(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/api/updateReservation/${id}`;
    return this.httpClient
      .put(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
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
