import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {Formation} from "../models/formations";

@Injectable({
  providedIn: 'root'
})
export class CrudFormationService {

  // Node/Express API
  REST_API: string = 'http://localhost:8000/api/formation';
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }

  // Add
  AddFormation(data: Formation): Observable<any> {
    let API_URL = `${this.REST_API}/api/addType`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }
  // Get all objects
  GetFormation() {
    return this.httpClient.get(`${this.REST_API}`);
  }

  // Delete
  deleteFormation(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/api/deleteFormation/${id}`;
    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));

  }
  // Update
  updateFormation(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/api/updateFormation/${id}`;
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
