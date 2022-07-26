import { Injectable } from '@angular/core';
import { Visite } from '../../models/visite';
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
export class CrudServiceVisite {
  REST_API: string = 'http://localhost:8000/api/visite';


  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }
  // Add
  AddVisite(data: Visite): Observable<any> {
    let API_URL = `${this.REST_API}/create`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }
  // Get all objects
  GetVisite() {
    return this.httpClient.get("http://localhost:8000/api/visite/getAll");
  }
  GetLieuById(nom:any) {
    return this.httpClient.get(`http://localhost:8000/api/visite/getLieuById`,nom);
  }

  //delete
  deleteVisite(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/deleteVisite/${id}`;
    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }
  // Update
  updateVisite(id: any, data: any): Observable<any> {

    let API_URL = `${this.REST_API}/update/${id}`;
    return this.httpClient
      .put(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  GetLieu() {
    return this.httpClient.get("http://localhost:8000/api/visite/getAllLieu");
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



  // Get single object
  GetVisiteOne(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/getVisite/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }



  //SEARCH BETWEEN TWO DATES
  // Get single object
  SearchBetweenDates(data: any): Observable<any> {
    let API_URL = `${this.REST_API}/searchPerDate`;
    //alert(JSON.stringify(data))
    return this.httpClient.post(API_URL, data).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

}
