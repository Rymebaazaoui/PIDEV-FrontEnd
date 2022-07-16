import { Injectable } from '@angular/core';
import { Visite } from '../models/visite';
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
export class CrudService {
  REST_API: string = 'http://localhost:8000/api';


  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }
  // Add
  AddVisite(data: Visite): Observable<any> {
    let API_URL = `${this.REST_API}/api/createVisiteType`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }
  // Get all objects
  GetVisite() {
    return this.httpClient.get(`${this.REST_API}`);
  }
  //delete
  deleteVisite(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/api/deleteVisiteById/${id}`;
    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }
  // Update
  updateVisite(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/api/updateVisite/${id}`;
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

