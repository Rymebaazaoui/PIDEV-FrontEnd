import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CrudAssociationService {

  // Node/Express API
  REST_API: string = 'http://localhost:8000/association';
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  getAssociation() {
    return this.httpClient.get(`${this.REST_API}`);
  }

  deleteParade(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/deleteAssociation/${id}`;
    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
  }

  getTypeAssociation() {
    return this.httpClient.get(`${this.REST_API}/type/association`);
  }

  addAssociation(data: any, id: any) {
    return this.httpClient.post(`${this.REST_API}/createAssociationType/${id}`, data)
  }
  updateParade(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/updateAssociation/${id}`;
    return this.httpClient
      .put(API_URL, data, { headers: this.httpHeaders })

  }

  AddInscriptionAssociation(data: any, id: any): Observable<any> {
    let API_URL = `${this.REST_API}/createInscriptionAssociation/${id}`;
    return this.httpClient
      .post(API_URL, data)

  }

  GetInsriptionAssociation() {
    return this.httpClient.get(`${this.REST_API}/InscriptionAssociation`);
  }
  deleteInscriptionAssociation(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/deleteInscriptionAssociationById/${id}`;
    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
  }
}
