import { Injectable } from '@angular/core';
import { Parade } from '../models/parade';
import { Inscription_parade } from '../models/Inscription_parade';
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

  // Node/Express API
  REST_API: string = 'http://localhost:8000/api';
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }

  // Add
  AddParade(data: Parade, id:any): Observable<any> {
    let API_URL = `${this.REST_API}/api/createParadeType/${id}`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }

  AddInscriptionParade(data: Inscription_parade, id:any): Observable<any> {
    let API_URL = `${this.REST_API}/createInscriptionParade/${id}`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }
  // Get all objects
  GetParade() {
    return this.httpClient.get(`${this.REST_API}`);
  }

  GetParade_type() {
    return this.httpClient.get(`${this.REST_API}/ParadeTypes`);
  }

  GetInsriptionParade() {
    return this.httpClient.get(`${this.REST_API}/InscriptionParade`);
  }


   // Get single object
   GetParadeOne(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/searchParade/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Delete
  deleteParade(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/api/deleteParadeById/${id}`;
    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
    
  }

  // Delete
  deleteInscriptionParade(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/deleteInscriptionById/${id}`;
    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
    
  }
   // Update
   updateParade(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/api/updateParade/${id}`;
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
