import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://funds-flow.herokuapp.com/api/feedback/';
// const httpOptions = {
//   headers:new HttpHeaders({ 'Content-Type': 'application/json'})
// };
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  postFeedback(name:string, email:string,phone_number:number, subject: string,message:string):Observable<any> {
    return this.http.post(AUTH_API, {
      name,
      email,
      phone_number,
      subject,
      message,

    });
  }
}
