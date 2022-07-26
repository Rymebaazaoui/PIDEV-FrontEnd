import { Injectable } from '@angular/core';
import { User } from '../models/user';
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
export class CrudUserService {

 
  
  // Node/Express API
  REST_API: string = 'http://localhost:8000/api/user';  
  
   // Http Header
   httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
   
  constructor(private http: HttpClient) { 
    
  }



getUser(): Observable<any> {
  let API_URL = `${this.REST_API}/getAll`;
  return this.http
    .get(API_URL)
    .pipe(catchError(this.handleError));
}
//add
AddUser(data: User): Observable<any> {
  let API_URL = `${this.REST_API}/createUser`;
  return this.http
    .post(API_URL, data)
    .pipe(catchError(this.handleError));
}
// Delete
deleteUser(id: any): Observable<any> {
  let API_URL = `${this.REST_API}/deleteUser/${id}`;
  return this.http
    .delete(API_URL, { headers: this.httpHeaders })
    .pipe(catchError(this.handleError));

}
Login(data :User): Observable <any>{
  let API_URL = `${this.REST_API}/login`;
  return this.http
    .post(API_URL, data)
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




