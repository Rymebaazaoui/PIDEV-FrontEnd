import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {Formation} from "../models/formations";
import {Inscription_formation} from '../models/Inscription_formations';

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
  AddFormation(data: Formation, id:any): Observable<any> {
    let API_URL = `${this.REST_API}/addType/${id}`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }
  // Get all formations
  GetFormation() {
    return this.httpClient.get(`${this.REST_API}`);
  }

  // Get single object
  GetOneFormation(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/searchFormation/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
  // add new formation inscription
  AddInscriptionFormation(data: Inscription_formation, id:any): Observable<any> {
    console.log('service',id);
    let API_URL = `${this.REST_API}/api/addInscription/${id}`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
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
    let API_URL = `${this.REST_API}/updateFormation/${id}`;
    return this.httpClient
      .put(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }
  // Gets formation type
  GetFormation_type() {
    return this.httpClient.get(`${this.REST_API}/getFormationType`);
  }

  SearchFormationPerDates(data: any): Observable<any> {
    let API_URL = `${this.REST_API}/searchFormationPerDate`;
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
