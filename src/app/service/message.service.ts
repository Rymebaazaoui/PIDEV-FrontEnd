import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'

@Injectable()
export class MessageService {
   _http: any;

  constructor(private_http: HttpClient) {}

  sendMessage(body: any) {
    return this._http.post('http://localhost:3000/sendmail', body);
  }
}